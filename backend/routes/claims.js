const express = require('express');
const router = express.Router();
const Claim = require('../models/Claim');
const Policy = require('../models/Policy');

// GET /api/claims — list all claims
router.get('/', async (req, res) => {
  try {
    const claims = await Claim.find()
      .populate('worker', 'name phone platform primaryZone')
      .sort({ createdAt: -1 })
      .select('-__v');
    const totalPaid = claims
      .filter((c) => c.status === 'paid')
      .reduce((sum, c) => sum + c.amount, 0);
    res.json({ count: claims.length, total_payouts: totalPaid, claims });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch claims.' });
  }
});

// GET /api/claims/worker/:workerId — claims for a single worker
router.get('/worker/:workerId', async (req, res) => {
  try {
    const claims = await Claim.find({ worker: req.params.workerId })
      .sort({ createdAt: -1 })
      .select('-__v');
    const totalPaid = claims
      .filter((c) => c.status === 'paid')
      .reduce((sum, c) => sum + c.amount, 0);
    res.json({ count: claims.length, total_payouts: totalPaid, claims });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch claims.' });
  }
});

// POST /api/claims — trigger a new claim (auto or manual)
router.post('/', async (req, res) => {
  try {
    const { workerId, eventType, triggerValue, zone, amount } = req.body;
    if (!workerId || !eventType || !zone || !amount) {
      return res.status(400).json({ error: 'workerId, eventType, zone, and amount are required.' });
    }

    // Find active policy for this worker
    const activePolicy = await Policy.findOne({ worker: workerId, isActive: true });

    const claim = await Claim.create({
      worker: workerId,
      policy: activePolicy?._id || null,
      eventType,
      triggerValue,
      zone,
      amount,
      status: 'paid',
      paidAt: new Date(),
    });

    res.status(201).json({
      message: 'Claim triggered and payout processed',
      claim: {
        id: claim._id,
        eventType: claim.eventType,
        triggerValue: claim.triggerValue,
        zone: claim.zone,
        amount: claim.amount,
        status: claim.status,
        paidAt: claim.paidAt,
      },
    });
  } catch (err) {
    console.error('Claim error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
