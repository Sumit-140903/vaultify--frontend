// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

import logo from '../assets/logo.png'; // 🔁 Make sure logo.png exists in src/assets/
import avatarImg from '../assets/avatar.png'; // 🔁 avatar image also in src/assets/

function Navbar({ walletAddress, isLoggedIn, clientName, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogoutClick = () => {
    setDropdownOpen(false);
    onLogout();
    navigate('/login');
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Vaultify Logo" className="logo-img" />
          <span className="logo-text">Vaultify</span>
        </Link>

        {isLoggedIn && (
          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/history">History</Link>
            <Link to="/requests">Requests</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/zkp">ZKP Verify</Link> {/* ✅ Added here */}
          </div>
        )}
      </div>

      <div className="navbar-right">
        {isLoggedIn && (
          <div className="dropdown-wrapper">
            <img
              src={avatarImg}
              alt="User"
              className="avatar-image"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <p>👤 {clientName}</p>
                <button onClick={() => navigate('/profile')}>User Profile</button>
                <button onClick={handleLogoutClick}>Logout</button>
              </div>
            )}
          </div>
        )}

        {walletAddress && (
          <span className="wallet-display">
            🧒 {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </span>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
