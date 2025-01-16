import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsButton = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [season, setSeason] = useState('');
  const [preference, setPreference] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('Location:', location, 'Season:', season, 'Preference:', preference);
    // Send the preferences data to the backend or API
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} color="primary">
        <SettingsIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Location</InputLabel>
            <Select value={location} onChange={(e) => setLocation(e.target.value)}>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              {/* Add more cities here */}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Season</InputLabel>
            <Select value={season} onChange={(e) => setSeason(e.target.value)}>
              <MenuItem value="Winter">Winter</MenuItem>
              <MenuItem value="Spring">Spring</MenuItem>
              <MenuItem value="Summer">Summer</MenuItem>
              <MenuItem value="Fall">Fall</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Personal Preference</InputLabel>
            <Select value={preference} onChange={(e) => setPreference(e.target.value)}>
              <MenuItem value="Formal">Formal</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Sporty">Sporty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingsButton;

