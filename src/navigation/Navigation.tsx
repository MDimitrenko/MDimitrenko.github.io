import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from 'src/screens/CartScreen/cartScreen';
import StoreScreen from 'src/screens/StoreScreen/storeScreen';
import ProfileScreen from 'src/screens/ProfileScreen/Profile';
import HomeScreen from 'src/screens/HomeScreen/Home';
import {AddProductionForm} from "src/components/Forms/addProductionForm/AddProductionForm";
import NotFound from 'src/screens/NotFound';
import RegistrationScreen from 'src/screens/RegistrationScreen';
import AuthorizationScreen from 'src/screens/AuthorizationScreen';

export const Navigation: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/store" element={<StoreScreen />} />
    <Route path="/cart" element={<CartScreen />} />
    <Route path="/profile" element={<ProfileScreen />} />
    <Route path="/addProduct" element={<AddProductionForm />} />
    <Route path="/signin" element={<AuthorizationScreen />} />
    <Route path="/signup" element={<RegistrationScreen />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
