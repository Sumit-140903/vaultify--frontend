// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import '../styles/Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Please fill in all fields');

    const nameFromEmail = email.split('@')[0];
    onLogin(nameFromEmail); // Redirect handled in App.jsx
  };

  return (
    <PageWrapper>
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
          <motion.button
            type="submit"
            className="login-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔐 Login
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
    </PageWrapper>
  );
}

export default Login;