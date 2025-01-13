// models/Preference.js
const mongoose = require('mongoose');

const PreferenceSchema = new mongoose.Schema({
  location: { type: String, required: true },
  season: { type: String, required: true },
  preference: { type: String, required: true }
});

module.exports = mongoose.model('Preference', PreferenceSchema);
