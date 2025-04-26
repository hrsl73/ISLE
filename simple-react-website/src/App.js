import React from 'react';
import Header from './components/Header';
import FooterBox from './components/FooterBox';
import SidebarBox from './components/SidebarBox';
import MainContentBox from './components/MainContentBox';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', gap: 0 }}>
      <Header />
      <div style={{ display: 'flex', flexGrow: 1, gap: '10px', minHeight: 0 }}>
        <SidebarBox />
        <MainContentBox />
      </div>
      <FooterBox />
    </div>
  );
}

export default App;
