const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ── Middleware ──────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── MongoDB Atlas Connection ────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// ── Route Imports ───────────────────────────────────────
const workerRoutes = require('./routes/workers');
const policyRoutes = require('./routes/policies');
const claimRoutes  = require('./routes/claims');
const riskRoutes   = require('./routes/risk');

// ── Health Check ────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({
    status: 'active',
    service: 'GigShield AI Backend',
    database: dbStatus,
    uptime: Math.floor(process.uptime()),
  });
});

// ── Mount Routes ────────────────────────────────────────
app.use('/api/workers',  workerRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/claims',   claimRoutes);
app.use('/api/risk',     riskRoutes);

// ── 404 Handler ─────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found.` });
});

// ── Global Error Handler ────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'An unexpected server error occurred.' });
});

// ── Start Server ────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🛡️  GigShield AI Backend → http://localhost:${PORT}\n`);
  console.log('  GET  /api/health');
  console.log('  POST /api/workers/register');
  console.log('  GET  /api/workers');
  console.log('  POST /api/policies');
  console.log('  GET  /api/policies/worker/:workerId');
  console.log('  GET  /api/claims');
  console.log('  POST /api/claims');
  console.log('  GET  /api/risk/monitor?zone=<zone>');
  console.log('  POST /api/risk/premium\n');
});
