import React from 'react';
import { Link } from 'react-router-dom';

const circleButtonStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '1px solid #7091E6',
  backgroundColor: '#3D52A0',
  padding: 0,
  cursor: 'pointer'
};

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      backgroundColor: '#3D52A0',
      borderBottom: '2px solid #7091E6',
      color: '#EDE8F5'
    }}>
      {/* Left: Title */}
      <div style={{ fontWeight: 'bold', fontSize: '32px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#EDE8F5' }}>ISLE</Link>
      </div>

      {/* Center: Navigation Bar */}
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '20px',
          color: '#EDE8F5'
        }}>
          <li><Link to="/" style={{ color: '#EDE8F5', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: '#EDE8F5', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: '#EDE8F5', textDecoration: 'none' }}>Contact</Link></li>
          <li><Link to="/services" style={{ color: '#EDE8F5', textDecoration: 'none' }}>Services</Link></li>
          <li><Link to="/blog" style={{ color: '#EDE8F5', textDecoration: 'none' }}>Blog</Link></li>
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
