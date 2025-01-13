const express = require('express');
const router = express.Router();
const ColorSuggestion = require('../models/ColorSuggestion');

// GET /suggestions: Fetch daily dress color suggestions
router.get('/', async (req, res) => {
  try {
    const today = new Date();
    const suggestions = await ColorSuggestion.find({
      date: { $gte: new Date(today.setHours(0, 0, 0, 0)) },
      season: req.query.season || 'summer',
      weather: req.query.weather || 'sunny'
    });
    
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
