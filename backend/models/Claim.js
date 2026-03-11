const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema(
  {
    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Worker',
      required: true,
    },
    policy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Policy',
    },
    eventType: {
      type: String,
      enum: ['Heavy Rainfall', 'Extreme AQI', 'Flood Alert', 'Zone Lockdown'],
      required: true,
    },
    triggerValue: { type: String }, // e.g. "52mm/hr" or "AQI 310"
    zone: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'paid', 'rejected', 'flagged'],
      default: 'pending',
    },
    paidAt: { type: Date },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Claim', ClaimSchema);
