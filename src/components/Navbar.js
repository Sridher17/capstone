// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <WbSunnyIcon sx={{ marginRight: 2 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Roboto' }}>
          Daily Dress Color Suggestions
        </Typography>
        <Box>
          <Button color="inherit" startIcon={<HomeIcon />}>Home</Button>
          <Button color="inherit" startIcon={<TrendingUpIcon />}>Suggestions</Button>
          <Button color="inherit" startIcon={<TrendingUpIcon />}>Color Trends</Button>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
