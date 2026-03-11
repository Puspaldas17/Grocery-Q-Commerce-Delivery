const express = require('express');
const router = express.Router();

// GET /api/risk/monitor?zone=<zone>
router.get('/monitor', (req, res) => {
  const { zone = 'Bangalore South' } = req.query;

  // Mock real-time risk data (Phase 2: will connect to Weather + AQI APIs)
  res.json({
    zone,
    timestamp: new Date().toISOString(),
    rainfall_mm_per_hr: 12,
    aqi: 112,
    flood_alert: false,
    zone_locked: false,
    overall_risk: 'low',
    risk_score: 28,
    triggers_active: [],
  });
});

// POST /api/risk/premium — calculate suggested premium for a zone
router.post('/premium', (req, res) => {
  const { zone = '', platform = '' } = req.body;
  const high = ['flood', 'south', 'central', 'mumbai'];
  const mid  = ['north', 'east', 'urban'];
  const z    = zone.toLowerCase();

  let riskScore = 25, premium = 39, maxPayout = 800, tier = 'Low Risk';
  if (high.some((k) => z.includes(k))) {
    riskScore = 72; premium = 79; maxPayout = 2000; tier = 'High Risk';
  } else if (mid.some((k) => z.includes(k))) {
    riskScore = 48; premium = 59; maxPayout = 1200; tier = 'Medium Risk';
  }

  res.json({ zone, platform, tier, risk_score: riskScore, weekly_premium: premium, max_weekly_payout: maxPayout });
});

module.exports = router;
