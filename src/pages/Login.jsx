// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Login.css'; // Make sure this path is correct

// Import assets for floating icons (ensure these paths are correct relative to Login.jsx)
import ethIcon from '../assets/eth.svg';
import lockIcon from '../assets/lock.svg';
import fileIcon from '../assets/file.svg';
// Assuming ParticleBackground is a component you want to use for the background
import ParticleBackground from '../pages/ParticleBackground'; // Adjust path if necessary

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Added for in-app error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message

    if (!email || !password) {
      setErrorMessage('Please fill in all fields.'); // Use state for error message
      return;
    }

    const nameFromEmail = email.split('@')[0];
    onLogin(nameFromEmail); // Redirect handled in App.jsx
  };

  return (
    // THIS IS THE CRITICAL WRAPPER FOR CENTERING AND BACKGROUND
    <div className="login-page-wrapper">
      {/* Background elements - ADDED FLOATING ICONS HERE */}
      <ParticleBackground /> {/* If you want particle effects */}
      <div className="aurora-top"></div>
      <div className="aurora-bottom"></div>
      <div className="floating-circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        {/* ADDED THESE FLOATING ICONS */}
        <img src={ethIcon} className="float-icon icon1" alt="Ethereum icon" />
        <img src={lockIcon} className="float-icon icon2" alt="Lock icon" />
        <img src={fileIcon} className="float-icon icon3" alt="File icon" />
      </div>
      {/* END Background elements */}

      <motion.div
        className="login-container glass-bg"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Login to Vaultify
        </motion.h2>

        <form onSubmit={handleSubmit}>
          <motion.input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          />

          {/* Display error message if present */}
          {errorMessage && (
            <motion.div
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {errorMessage}
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="login-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <motion.p
          className="login-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Don't have an account? <Link to="/register">Register</Link>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Login;
