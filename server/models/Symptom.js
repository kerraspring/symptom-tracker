const mongoose = require('mongoose');

const SymptomSchema = new mongoose.Schema({
  systolic: {
    type: Number,
    required: true
  },
  diastolic: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Symptom', SymptomSchema);