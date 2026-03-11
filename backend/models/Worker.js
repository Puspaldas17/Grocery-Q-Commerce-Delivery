const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    platform: {
      type: String,
      enum: ['Zepto', 'Blinkit', 'Instamart', 'Other'],
      required: true,
    },
    primaryZone: { type: String, required: true, trim: true },
    riskScore: { type: Number, default: 0, min: 0, max: 100 },
    riskCategory: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low',
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Worker', WorkerSchema);
