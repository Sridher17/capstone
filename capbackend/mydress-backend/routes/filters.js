// routes/filters.js
const express = require('express');
const router = express.Router();
const Preference = require('../models/Preference'); // Import the Preference model

// POST route to save user preferences (location, season, and personal preference)
router.post('/savePreferences', async (req, res) => {
  const { location, season, preference } = req.body;

  try {
    // Create a new preference document
    const newPreference = new Preference({
      location,
      season,
      preference
    });

    // Save the preference to MongoDB
    await newPreference.save();
    
    res.status(200).json({ message: 'Preferences saved successfully!' });
  } catch (error) {
    console.error('Error saving preferences:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
