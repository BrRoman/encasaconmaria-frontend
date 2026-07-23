import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/encasaconmaria' element={<Home />} />
      <Route path='/encasaconmaria/about' element={<About />} />
      <Route path='/encasaconmaria/products' element={<Products />} />
      <Route path='/encasaconmaria/contact' element={<Contact />} />
    </Routes>
  );
}
