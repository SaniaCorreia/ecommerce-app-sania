// src/components/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>{item.price}</Typography>
                <Button onClick={() => removeFromCart(item.id)} variant="outlined" color="secondary">
                  Remove
                </Button>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography>No items in cart.</Typography>
        )}
      </Grid>
      <Button component={Link} to="/checkout" variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartPage;

