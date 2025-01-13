const express = require('express');
const Suggestion = require('../models/Suggestion');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ colors: ['Red', 'Blue', 'Yellow'] }); // Replace with your logic to fetch from DB
  });

// GET /suggestions - Fetch daily color suggestions
router.get('/', async (req, res) => {
  try {
    const today = new Date();
    const suggestions = await Suggestion.findOne({
      date: { $gte: today.setHours(0, 0, 0, 0) }
    });

    if (!suggestions) {
      return res.status(404).json({ message: 'No suggestions found for today.' });
    }

    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
