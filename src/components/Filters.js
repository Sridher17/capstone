import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const Filters = () => {
  const [location, setLocation] = useState('');
  const [season, setSeason] = useState('');
  const [preference, setPreference] = useState('');

  // Array of Indian cities (you can add more as needed)
  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata',
    'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
    'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad'
    // Add more cities as required
  ];

  const handleFilter = () => {
    console.log('Location:', location, 'Season:', season, 'Preference:', preference);

    // Send the selected data to the backend
    fetch('http://localhost:5001/api/filters/savePreferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location, season, preference }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      {/* Location Dropdown */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Location</InputLabel>
        <Select value={location} onChange={(e) => setLocation(e.target.value)}>
          {/* Dynamically generate MenuItems for cities */}
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Season Dropdown */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Season</InputLabel>
        <Select value={season} onChange={(e) => setSeason(e.target.value)}>
          <MenuItem value="Winter">Winter</MenuItem>
          <MenuItem value="Spring">Spring</MenuItem>
          <MenuItem value="Summer">Summer</MenuItem>
          <MenuItem value="Fall">Fall</MenuItem>
        </Select>
      </FormControl>

      {/* Personal Preference Dropdown */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Personal Preference</InputLabel>
        <Select value={preference} onChange={(e) => setPreference(e.target.value)}>
          <MenuItem value="Formal">Formal</MenuItem>
          <MenuItem value="Casual">Casual</MenuItem>
          <MenuItem value="Sporty">Sporty</MenuItem>
        </Select>
      </FormControl>

      {/* Apply Filters Button */}
      <Button variant="contained" onClick={handleFilter}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
