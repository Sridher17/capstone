import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';

const Suggestion = ({ trendingColor }) => {
  const suggestedColors = ['Red', 'Blue', 'Yellow']; // Example hardcoded colors
  const trend = trendingColor || 'No trending color'; // Fallback if no color is fetched

  return (
    <Paper sx={{ padding: 2, marginTop: 8 }}>
      <Typography variant="h6" gutterBottom>
        Today's Dress Color Suggestions
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Trending Color in India: {trend}
      </Typography>
      <Grid container spacing={2}>
        {suggestedColors.map((color, index) => (
          <Grid item xs={4} key={index}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: color.toLowerCase(),
                color: '#fff',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PaletteIcon sx={{ marginRight: 1 }} />
              <Typography>{color}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Suggestion;
