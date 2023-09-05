import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from 'src/screens/cartScreen';
import StoreScreen from 'src/screens/storeScreen';

export const Navigation: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StoreScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Routes>
  </BrowserRouter>
);
