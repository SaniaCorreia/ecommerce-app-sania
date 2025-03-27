// src/components/PurchaseHistoryPage.js
import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const PurchaseHistoryPage = () => {
  // Example past purchase data
  const pastPurchases = [
    { id: 1, name: 'Sneakers', price: '$25.00', date: '2025-01-01' },
    { id: 2, name: 'Sandals', price: '$30.00', date: '2025-01-05' },
    { id: 3, name: 'Slippers', price: '$45.00', date: '2025-01-10' },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Purchase History
      </Typography>
      <Grid container spacing={2}>
        {pastPurchases.length > 0 ? (
          pastPurchases.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>{item.price}</Typography>
                <Typography>{item.date}</Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography>No past purchases.</Typography>
        )}
      </Grid>
    </div>
  );
};

export default PurchaseHistoryPage;
