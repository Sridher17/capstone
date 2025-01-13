const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  dateRange: {
    start: { type: Date, required: true },
    end: { type: Date, required: true }
  },
  popularColors: [String],  // List of popular colors for the given date range
  season: { type: String }, // Example: "winter", "summer"
  totalOccurrences: { type: Number, required: true }
});

module.exports = mongoose.model('Trend', trendSchema);
