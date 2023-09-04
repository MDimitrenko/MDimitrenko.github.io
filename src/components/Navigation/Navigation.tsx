import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/screens/HomeScreen';
import Profile from 'src/screens/ProfileScreen';
import NotFound from 'src/screens/NotFound';

const Navigation: FC = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Navigation;