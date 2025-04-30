import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#3D52A0',
      color: '#EDE8F5',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Left: Logo */}
      <div style={{ fontWeight: 'bold', fontSize: '32px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#EDE8F5' }}>ISLE</Link>
      </div>

      {/* Right: Navigation Links */}
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '30px',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          <li><Link to="/about" style={{ color: '#EDE8F5', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/services" style={{ color: '#EDE8F5', textDecoration: 'none' }}>Our Services</Link></li>
          <li><Link to="/contact" style={{ color: '#EDE8F5', textDecoration: 'none' }}>Contact Us</Link></li>
          <li><Link to="/login" style={{ color: '#EDE8F5', textDecoration: 'none' }}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
