const mongoose = require('mongoose');

const VitalsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperature: Number,
  heartRate: Number,
  bloodPressure: String,
  oxygenLevel: Number,
  weight: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vitals', VitalsSchema);
