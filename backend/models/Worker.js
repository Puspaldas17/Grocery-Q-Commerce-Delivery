const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  platform: { type: String, enum: ['Zepto', 'Blinkit', 'Instamart', 'Other'], required: true },
  primaryZone: { type: String, required: true },
  isInsured: { type: Boolean, default: false },
  policyExpiry: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Worker', WorkerSchema);
