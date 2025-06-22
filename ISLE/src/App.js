import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FooterBox from './components/FooterBox';
import MainContentBox from './components/MainContentBox';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', gap: 0 }}>
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}  />
        {/* Add more <Route> elements as needed */}
      </Routes>

      <HeroSection />
      <div style={{ display: 'flex', flexGrow: 1, gap: 0, minHeight: 0 }}>
        <MainContentBox />
      </div>
      <FooterBox />
    </div>
  );
}

export default App;
