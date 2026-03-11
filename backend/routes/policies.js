const express = require('express');
const router = express.Router();
const Policy = require('../models/Policy');
const Worker = require('../models/Worker');

// POST /api/policies — purchase a new weekly policy
router.post('/', async (req, res) => {
  try {
    const { workerId, zone } = req.body;
    if (!workerId || !zone) {
      return res.status(400).json({ error: 'workerId and zone are required.' });
    }

    const worker = await Worker.findById(workerId);
    if (!worker) return res.status(404).json({ error: 'Worker not found.' });

    // Map risk category → premium and max payout
    const tierMap = {
      Low:    { tier: 'Low Risk',    premium: 39,  maxPayout: 800  },
      Medium: { tier: 'Medium Risk', premium: 59,  maxPayout: 1200 },
      High:   { tier: 'High Risk',   premium: 79,  maxPayout: 2000 },
    };
    const { tier, premium, maxPayout } = tierMap[worker.riskCategory] || tierMap.Low;

    // Expiry = 7 days from now
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    // Deactivate any existing active policy for this worker
    await Policy.updateMany({ worker: workerId, isActive: true }, { isActive: false });

    const policy = await Policy.create({
      worker: workerId,
      tier,
      weeklyPremium: premium,
      maxWeeklyPayout: maxPayout,
      zone,
      expiryDate,
    });

    res.status(201).json({
      message: 'Policy activated successfully',
      policy: {
        id: policy._id,
        tier: policy.tier,
        weeklyPremium: policy.weeklyPremium,
        maxWeeklyPayout: policy.maxWeeklyPayout,
        zone: policy.zone,
        expiryDate: policy.expiryDate,
        isActive: policy.isActive,
      },
    });
  } catch (err) {
    console.error('Policy error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

// GET /api/policies/worker/:workerId — get policies for a worker
router.get('/worker/:workerId', async (req, res) => {
  try {
    const policies = await Policy.find({ worker: req.params.workerId })
      .sort({ createdAt: -1 })
      .select('-__v');
    res.json({ count: policies.length, policies });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch policies.' });
  }
});

// GET /api/policies — list all policies
router.get('/', async (req, res) => {
  try {
    const policies = await Policy.find()
      .populate('worker', 'name phone platform primaryZone')
      .sort({ createdAt: -1 })
      .select('-__v');
    res.json({ count: policies.length, policies });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch policies.' });
  }
});

module.exports = router;
