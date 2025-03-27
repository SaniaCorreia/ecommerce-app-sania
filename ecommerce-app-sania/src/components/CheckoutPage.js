// src/components/CheckoutPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      {cart.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>{item.price}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" gutterBottom>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Complete Purchase
          </Button>
        </>
      ) : (
        <Typography>Your cart is empty.</Typography>
      )}
    </div>
  );
};

export default CheckoutPage;
