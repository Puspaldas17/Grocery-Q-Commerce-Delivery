const express = require('express');
const router = express.Router();
const Worker = require('../models/Worker');

// POST /api/workers/register
router.post('/register', async (req, res) => {
  try {
    const { name, phone, platform, zone } = req.body;
    if (!name || !phone || !platform || !zone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const existing = await Worker.findOne({ phone });
    if (existing) {
      return res.status(409).json({ error: 'A worker with this phone number is already registered.' });
    }

    // Simulate AI risk score based on zone keywords
    const highRiskKeywords = ['flood', 'south', 'central', 'mumbai'];
    const mediumRiskKeywords = ['north', 'east', 'urban'];
    const zoneLower = zone.toLowerCase();
    let riskScore = 25;
    let riskCategory = 'Low';
    if (highRiskKeywords.some((k) => zoneLower.includes(k))) {
      riskScore = 72;
      riskCategory = 'High';
    } else if (mediumRiskKeywords.some((k) => zoneLower.includes(k))) {
      riskScore = 48;
      riskCategory = 'Medium';
    }

    const worker = await Worker.create({
      name,
      phone,
      platform,
      primaryZone: zone,
      riskScore,
      riskCategory,
    });

    const workerId = `WKR-${worker._id.toString().slice(-4).toUpperCase()}`;

    res.status(201).json({
      message: 'Worker registered successfully',
      workerId,
      worker: {
        id: worker._id,
        name: worker.name,
        platform: worker.platform,
        primaryZone: worker.primaryZone,
        riskScore: worker.riskScore,
        riskCategory: worker.riskCategory,
        createdAt: worker.createdAt,
      },
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// GET /api/workers — list all workers
router.get('/', async (req, res) => {
  try {
    const workers = await Worker.find().select('-__v').sort({ createdAt: -1 });
    res.json({ count: workers.length, workers });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workers.' });
  }
});

// GET /api/workers/:id — single worker
router.get('/:id', async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id).select('-__v');
    if (!worker) return res.status(404).json({ error: 'Worker not found.' });
    res.json(worker);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch worker.' });
  }
});

module.exports = router;
