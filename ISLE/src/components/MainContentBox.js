import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Blog from '../pages/Blog';

const MainContentBox = () => {
  return (
    <div style={{
      border: '2px solid #000',
      padding: '20px',
      flexGrow: 1,
      backgroundColor: '#e0e0e0',
      fontSize: '18px',
      overflowY: 'auto',
      minHeight: 0
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default MainContentBox;
