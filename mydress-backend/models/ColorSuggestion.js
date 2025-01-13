const mongoose = require('mongoose');

const colorSuggestionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  weather: { type: String, required: true },  // Example: "sunny", "rainy"
  season: { type: String, required: true },   // Example: "winter", "summer"
  occasion: { type: String },                 // Example: "casual", "formal"
  suggestedColors: [String]                   // List of color suggestions
});

module.exports = mongoose.model('ColorSuggestion', colorSuggestionSchema);

