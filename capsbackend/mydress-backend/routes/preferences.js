const express = require('express');
const Preference = require('../models/Preference');

const router = express.Router();

// POST /preferences - Save or update user preferences
router.post('/', async (req, res) => {
  const { userId, preferredColors, weatherPreference } = req.body;

  try {
    const existingPreference = await Preference.findOne({ userId });

    if (existingPreference) {
      existingPreference.preferredColors = preferredColors;
      existingPreference.weatherPreference = weatherPreference;
      await existingPreference.save();
      return res.json({ message: 'Preferences updated successfully.' });
    }

    const newPreference = new Preference({
      userId,
      preferredColors,
      weatherPreference,
    });

    await newPreference.save();
    res.status(201).json({ message: 'Preferences saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
