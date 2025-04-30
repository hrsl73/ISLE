import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FooterBox from './components/FooterBox';
import MainContentBox from './components/MainContentBox';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', gap: 0 }}>
      <Header />
      <HeroSection />
      <div style={{ display: 'flex', flexGrow: 1, gap: 0, minHeight: 0 }}>
        <MainContentBox />
      </div>
      <FooterBox />
    </div>
  );
}

export default App;
