import React from 'react';
import { Link } from 'react-router-dom';

const circleButtonStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '1px solid #000',
  backgroundColor: '#fff',
  padding: 0,
  cursor: 'pointer'
};

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#f8f8f8',
      borderBottom: '2px solid #ccc'
    }}>
      {/* Left: Title */}
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ISLE</Link>
      </div>

      {/* Center: Navigation Bar */}
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '20px'
        }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>

      {/* Right: Circular Buttons without labels */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/circle1"><button style={circleButtonStyle} /></Link>
        <Link to="/circle2"><button style={circleButtonStyle} /></Link>
        <Link to="/circle3"><button style={circleButtonStyle} /></Link>
        <Link to="/circle4"><button style={circleButtonStyle} /></Link>
      </div>
    </header>
  );
};

export default Header;
