const express = require('express');
const Suggestion = require('../models/Suggestion');

const router = express.Router();

// GET /trends - Fetch color trends data
router.get('/', async (req, res) => {
  try {
    const trends = await Suggestion.aggregate([
      { $unwind: '$colors' },
      { $group: { _id: '$colors', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json(trends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
