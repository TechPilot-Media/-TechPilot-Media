// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import AppLayout from './layout/AppLayout';
import AboutUs from './pages/AboutUs';

import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
