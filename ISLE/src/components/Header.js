import React from 'react';
import { Link } from 'react-router-dom';

const navLinkStyle = {
  color: '#EDE8F5',
  textDecoration: 'none',
  position: 'relative',
  transition: 'all 0.3s ease-in-out'
};

const hoverEffectStyle = `
  .nav-link:hover {
    color: #FFD700; /* gold highlight on hover */
    transform: scale(1.05); /* slight zoom */
  }

  .nav-link::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: #FFD700;
    transition: width 0.3s ease-in-out;
  }

  .nav-link:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <>
      {/* Inject custom CSS */}
      <style>{hoverEffectStyle}</style>

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
          <Link to="/" style={navLinkStyle}>ISLE</Link>
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
            <li><Link to="/about" className="nav-link" style={navLinkStyle}>About</Link></li>
            <li><Link to="/services" className="nav-link" style={navLinkStyle}>Our Services</Link></li>
            <li><Link to="/contact" className="nav-link" style={navLinkStyle}>Contact Us</Link></li>
            <li><Link to="/login" className="nav-link" style={navLinkStyle}>Login</Link></li>
            <li><Link to="/register" className="nav-link" style={navLinkStyle}>Register</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
