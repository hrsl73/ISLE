import React from 'react';

const HeroSection = () => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '60px 80px 40px 80px',
      backgroundColor: '#f5f7fa',
      flexWrap: 'wrap',
    }}>
      {/* Left Column (Text) */}
      <div style={{
        flex: '1 1 45%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        boxSizing: 'border-box',
        marginLeft: '40px',  //to move text to right or left
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          lineHeight: 1.2,
          marginBottom: '20px',
        }}>
          <span style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#3D52A0',
            whiteSpace: 'nowrap'
          }}>
            Welcome to the
          </span>
          <span style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#3D52A0',
            whiteSpace: 'nowrap',
            marginTop: '8px'
          }}>
            World of ISLE
          </span>
        </div>
        <p style={{
          fontSize: '1.1rem',
          color: '#555',
          margin: 0
        }}>
          Discover the best services and solutions tailored for you.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: '#555',
          margin: 0
        }}>
          Join us and explore the possibilities.
        </p>
        
      </div>

      {/* Right Column (Image) */}
      <div style={{
        flex: '1 1 40%',
        maxWidth: '500px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingTop: '10px',
      }}>
        <img
          src="/isle-logo.png" 
          alt="Hero"
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
