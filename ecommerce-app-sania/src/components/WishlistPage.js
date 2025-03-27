// src/components/WishlistPage.js
import React from 'react';
import { useWishlist } from '../context/CartContext';
import { Button, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Wishlist
      </Typography>
      <Grid container spacing={2}>
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>{item.price}</Typography>
                <Button onClick={() => removeFromWishlist(item.id)} variant="outlined" color="secondary">
                  Remove
                </Button>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography>No items in wishlist.</Typography>
        )}
      </Grid>
      <Button component={Link} to="/cart" variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Go to Cart
      </Button>
    </div>
  );
};

export default WishlistPage;
