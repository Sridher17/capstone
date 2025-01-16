// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const suggestionRoutes = require('./routes/suggestions');
app.use('/suggestions', suggestionRoutes);

// Middleware
app.use(express.json()); // To parse incoming JSON data
app.use(cors()); // To allow cross-origin requests

// MongoDB Connection (already set up in your previous configuration)
mongoose.connect('mongodb://localhost:27017/mydress', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const filtersRoute = require('./routes/filters');
app.use('/api/filters', filtersRoute); // Add filters route

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
