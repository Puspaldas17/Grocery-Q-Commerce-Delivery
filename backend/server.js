const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ── Health Check ────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'active', service: 'GigShield AI Backend', uptime: process.uptime() });
});

// ── Worker Registration ─────────────────────────────────
app.post('/api/workers/register', (req, res) => {
  const { name, phone, platform, zone } = req.body;
  if (!name || !phone || !platform || !zone) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  res.status(201).json({
    message: 'Worker registered successfully',
    workerId: `WKR-${Math.floor(1000 + Math.random() * 9000)}`,
    name, phone, platform, primaryZone: zone,
    isInsured: false,
    createdAt: new Date().toISOString(),
  });
});

// ── Live Risk Monitor ───────────────────────────────────
app.get('/api/risk/monitor', (req, res) => {
  const { zone = 'Bangalore South' } = req.query;
  // Mock real-time risk data (would integrate Weather + AQI APIs in production)
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

// ── Claims ──────────────────────────────────────────────
app.get('/api/claims', (req, res) => {
  res.json({
    claims: [
      { id: 'CLM-001', date: '2026-03-01', event: 'Heavy Rainfall (52mm/hr)', amount: 350, status: 'paid' },
      { id: 'CLM-002', date: '2026-02-21', event: 'Extreme AQI (AQI 310)', amount: 200, status: 'paid' },
      { id: 'CLM-003', date: '2026-02-08', event: 'Zone Lockdown (4 hrs)', amount: 300, status: 'paid' },
    ],
    total_payouts: 850,
  });
});

// ── Premium Calculation ─────────────────────────────────
app.post('/api/premium/calculate', (req, res) => {
  const { zone, platform } = req.body;
  // Mock AI-driven premium calculation
  const baseRisk = Math.floor(20 + Math.random() * 60);
  const premium = baseRisk < 40 ? 39 : baseRisk < 70 ? 59 : 79;
  const maxPayout = premium === 39 ? 800 : premium === 59 ? 1200 : 2000;
  res.json({ zone, platform, risk_score: baseRisk, weekly_premium: premium, max_weekly_payout: maxPayout });
});

// ─────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🛡️  GigShield AI Backend running on http://localhost:${PORT}\n`);
  console.log('  GET  /api/health');
  console.log('  POST /api/workers/register');
  console.log('  GET  /api/risk/monitor?zone=<zone>');
  console.log('  GET  /api/claims');
  console.log('  POST /api/premium/calculate\n');
});
