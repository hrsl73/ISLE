import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FooterBox from './components/FooterBox';
import MainContentBox from './components/MainContentBox';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Routes>
        {/* Standalone auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Other routes with layout */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <MainContentBox>
                <Home />
              </MainContentBox>
              <FooterBox />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <HeroSection />
              <MainContentBox>
                <About />
              </MainContentBox>
              <FooterBox />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <HeroSection />
              <MainContentBox>
                <Services />
              </MainContentBox>
              <FooterBox />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <HeroSection />
              <MainContentBox>
                <Contact />
              </MainContentBox>
              <FooterBox />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
