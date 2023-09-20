import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from 'src/screens/CartScreen/cartScreen';
import StoreScreen from 'src/screens/StoreScreen/storeScreen';
import ProfileScreen from 'src/screens/ProfileScreen/Profile';
import HomeScreen from 'src/screens/HomeScreen/Home';
import NotFound from 'src/screens/NotFound';
import RegistrationScreen from 'src/screens/RegistrationScreen';
import AuthorizationScreen from 'src/screens/AuthorizationScreen';
import { TokenProvider } from 'src/TokenProvider'; // Импортируйте TokenProvider
import { ProtectedRoute } from './ProtectedRoute';
import { AddProductionForm } from '../components/Forms/addProductionForm/AddProductionForm';

export const Navigation: React.FC = () => (
  <TokenProvider>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/store" element={<StoreScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route
        path="/addProduct"
        element={
          <ProtectedRoute>
            <AddProductionForm />
          </ProtectedRoute>
        }
      />
      <Route path="/signin" element={<AuthorizationScreen />} />
      <Route path="/signup" element={<RegistrationScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TokenProvider>
);
