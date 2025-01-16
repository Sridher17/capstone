// components/Charts.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend } from 'recharts';
import { Paper, Typography, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// Sample data for charts
const barData = [
  { name: 'Red', count: 12 },
  { name: 'Blue', count: 8 },
  { name: 'Green', count: 10 },
  { name: 'Yellow', count: 5 },
];

const pieData = [
  { name: 'Sunny', value: 40 },
  { name: 'Cloudy', value: 30 },
  { name: 'Rainy', value: 20 },
  { name: 'Snowy', value: 10 },
];

const COLORS = ['#FFBB28', '#00C49F', '#FF8042', '#0088FE'];

const Charts = () => {
  return (
    <Grid container spacing={3}>
      {/* Bar Chart */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom fontFamily="Roboto">
            <TrendingUpIcon sx={{ marginRight: 1 }} />
            Color Trends
          </Typography>
          <BarChart width={300} height={200} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </Paper>
      </Grid>

      {/* Pie Chart */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom fontFamily="Roboto">
            <WbSunnyIcon sx={{ marginRight: 1 }} />
            Weather-based Suggestions
          </Typography>
          <PieChart width={300} height={200}>
            <Pie
              data={pieData}
              cx={150}
              cy={100}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Charts;
