import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from 'src/screens/CartScreen/cartScreen';
import StoreScreen from 'src/screens/StoreScreen/storeScreen';

export const Navigation: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StoreScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Routes>
  </BrowserRouter>
);
