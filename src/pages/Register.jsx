// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Auth.css'; // This is the CSS file for Register page

// Import assets for floating icons (ensure these paths are correct relative to Register.jsx)
import ethIcon from '../assets/eth.svg';
import lockIcon from '../assets/lock.svg';
import fileIcon from '../assets/file.svg';

// CORRECTED IMPORT PATH: ParticleBackground is in the same 'pages' directory
import ParticleBackground from './ParticleBackground'; // Changed from ../components/ParticleBackground

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // For success/error messages
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (!fullName || !email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Simulate registration success
    setMessage('Registered successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login'); // Go to login after registration
    }, 2000); // Redirect after 2 seconds
  };

  return (
    // This wrapper div will handle centering and the dynamic background
    <div className="auth-page-wrapper">
      {/* Background elements */}
      {/* If you still get an error, temporarily comment out <ParticleBackground /> */}
      <ParticleBackground /> {/* If you want particle effects */}
      <div className="aurora-top"></div>
      <div className="aurora-bottom"></div>
      <div className="floating-circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        {/* Ensure these icons are available in your assets folder */}
        <img src={ethIcon} className="float-icon icon1" alt="Ethereum icon" />
        <img src={lockIcon} className="float-icon icon2" alt="Lock icon" />
        <img src={fileIcon} className="float-icon icon3" alt="File icon" />
      </div>
      {/* END Background elements */}

      <motion.div
        className="auth-container glass-bg" // Using auth-container for this page's box
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Register on Vaultify
        </motion.h2>

        <form onSubmit={handleRegister} autoComplete="on">
          <motion.input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            whileFocus={{ scale: 1.03 }}
          />
          <motion.input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.03 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            whileFocus={{ scale: 1.03 }}
          />

          {/* Display message if present */}
          {message && (
            <motion.div
              className="info-message" // Using a general info-message class
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {message}
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="register-btn" // Using register-btn for this page's button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>

        <motion.p
          className="login-tagline" // Reusing login-tagline for consistency
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Already have an account? <Link to="/login">Login</Link>
        </motion.p>
      </motion.div>
    </div> // Closing the wrapper div
  );
}

export default Register;
