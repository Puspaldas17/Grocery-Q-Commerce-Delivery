const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema(
  {
    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Worker',
      required: true,
    },
    tier: {
      type: String,
      enum: ['Low Risk', 'Medium Risk', 'High Risk'],
      required: true,
    },
    weeklyPremium: { type: Number, required: true },
    maxWeeklyPayout: { type: Number, required: true },
    zone: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Policy', PolicySchema);
