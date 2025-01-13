const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  colors: [String], // Suggested colors
  weather: String, // Weather conditions
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);
