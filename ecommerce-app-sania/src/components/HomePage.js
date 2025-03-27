// src/components/HomePage.js
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/CartContext';

const products = [
  { id: 1, name: 'Product 1', price: '$25.00', image: 'https://m.media-amazon.com/images/I/614aiM56siL._AC_UY1000_.jpg' },
  { id: 2, name: 'Product 2', price: '$30.00', image: 'https://assets.ajio.com/medias/sys_master/root/20240403/lvnu/660d30c316fd2c6e6a99da75/-473Wx593H-467221620-brown-MODEL.jpg' },
  { id: 3, name: 'Product 3', price: '$45.00', image: 'https://m.media-amazon.com/images/I/81fhFIdxJyL._AC_UY1000_.jpg' },
];

const HomePage = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.price}</Typography>
              <Button component={Link} to={`/product/${product.id}`} variant="contained">
                View Details
              </Button>
              <Button onClick={() => addToCart(product)} variant="outlined" color="primary" fullWidth>
                Add to Cart
              </Button>
              <Button onClick={() => addToWishlist(product)} variant="outlined" color="secondary" fullWidth>
                Add to Wishlist
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
