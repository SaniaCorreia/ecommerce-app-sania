// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/CartContext';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  // Example product data (In a real application, this would come from an API)
  const product = {
    id: id,
    name: `Product ${id}`,
    price: `$${id * 10 + 25}`,
    image: `product${id}.jpg`,
    description: `This is the description for product ${id}.`,
  };

  return (
    <Card>
      <CardMedia component="img" height="300" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        <Typography variant="h6">{product.price}</Typography>
        <Button onClick={() => addToCart(product)} variant="outlined" color="primary" fullWidth>
          Add to Cart
        </Button>
        <Button onClick={() => addToWishlist(product)} variant="outlined" color="secondary" fullWidth>
          Add to Wishlist
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
