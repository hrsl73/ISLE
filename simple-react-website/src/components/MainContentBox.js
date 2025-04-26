import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Circle1 from '../pages/Circle1';
import Circle2 from '../pages/Circle2';
import Circle3 from '../pages/Circle3';
import Circle4 from '../pages/Circle4';

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
        <Route path="/circle1" element={<Circle1 />} />
        <Route path="/circle2" element={<Circle2 />} />
        <Route path="/circle3" element={<Circle3 />} />
        <Route path="/circle4" element={<Circle4 />} />
      </Routes>
    </div>
  );
};

export default MainContentBox;
