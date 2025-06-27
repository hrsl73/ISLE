import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccessMsg(res.data.message || 'Registered successfully!');
      setFormData({ name: '', email: '', password: '' });

      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={styles.container}>
      <motion.form
        onSubmit={handleSubmit}
        style={styles.form}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="/isle-logo.png" alt="ISLE Logo" style={styles.logo} />
        <h2>Register</h2>
        {error && <p style={styles.error}>{error}</p>}
        {successMsg && <p style={styles.success}>{successMsg}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button
          type="submit"
          style={{ ...styles.button, ...styles.hoverButton }}
        >
          Register
        </button>

        <Link to="/" style={styles.backButton}>← Back to Home</Link>

        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Already have an account? <Link to="/login" style={styles.toggleLink}>Login</Link>
        </p>
      </motion.form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '100px',
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    backgroundColor: '#3D52A0',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    color: '#EDE8F5',
    position: 'relative',
  },
  logo: {
    width: '80px',
    margin: '0 auto 20px',
    display: 'block',
  },
  input: {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    outline: 'none',
  },
  button: {
    padding: '12px',
    background: '#FFD700',
    color: '#3D52A0',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'all 0.3s ease',
  },
  backButton: {
    textAlign: 'center',
    display: 'block',
    color: '#EDE8F5',
    marginTop: '10px',
    textDecoration: 'underline',
  },
  toggleLink: {
    color: '#FFD700',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  error: {
    color: '#ff6961',
    marginBottom: '10px',
  },
  success: {
    color: '#00cc66',
    marginBottom: '10px',
  },
};

export default Register;
