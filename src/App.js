import React, { useEffect, useState } from 'react';
import { Box, Container, CssBaseline, CircularProgress } from '@mui/material';
import Navbar from './components/Navbar';
import Suggestion from './components/Suggestion';
import Charts from './components/Charts';
import Filters from './components/Filters';
import axios from 'axios';

const App = () => {
  const [trendingColor, setTrendingColor] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch the trending color automatically when the app loads
  useEffect(() => {
    const fetchTrendingColor = async () => {
      try {
        const response = await axios.get('/api/trending-color'); // Backend endpoint for trending color
        setTrendingColor(response.data.trendingColor); // Assuming API response has trendingColor
      } catch (error) {
        console.error('Error fetching trending color:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingColor();
  }, []); // Run only on component mount

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginTop: 8 }}>
        <Container maxWidth="lg">
          <Filters />
          
          {/* If loading, show spinner, otherwise pass trendingColor to Suggestion */}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Suggestion trendingColor={trendingColor} /> 
          )
        }
          <Charts />
        </Container>
      </Box>
    </Box>
  );
};

export default App;
