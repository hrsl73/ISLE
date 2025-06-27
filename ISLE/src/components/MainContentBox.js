// src/components/MainContentBox.js
import React from 'react';

const MainContentBox = ({ children }) => {
  return (
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#e0e0e0',
      fontSize: '18px',
      width: '100%',
      marginBottom: '20px',
      borderTop: '2px solid #ccc',
      borderBottom: '2px solid #ccc',
    }}>
      {children}
    </div>
  );
};

export default MainContentBox;
