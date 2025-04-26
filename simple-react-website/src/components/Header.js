import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };

  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px 20px' }}>
        <h1 style={{ margin: 0 }}>ISLE</h1><br></br>
      <nav>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          About
        </NavLink>{' '}
        |{' '}
        <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
