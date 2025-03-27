// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import CheckoutPage from './components/CheckoutPage';
import PurchaseHistoryPage from './components/PurchaseHistoryPage';
import { Container } from '@mui/material';
import { CartProvider, WishlistProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Navbar /> {/* Navbar will be available on all pages */}
          <Container style={{ marginTop: '20px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
            </Routes>
          </Container>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
