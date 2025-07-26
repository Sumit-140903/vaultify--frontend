// src/components/ConnectWallet.jsx
import React, { useRef, useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import './ConnectWallet.css';
import metaMaskLogo from '../assets/Metamask-fox.svg';
import ethIcon from '../assets/eth.svg';
import lockIcon from '../assets/lock.svg';
import fileIcon from '../assets/file.svg';
import ParticleBackground from './ParticleBackground'; 

function ConnectWallet({ onConnect }) {
  const cardRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  // Handles the 3D tilt effect on mouse movement
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return; // Ensure cardRef is not null
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  // Resets the 3D tilt when mouse leaves the card
  const resetTilt = () => {
    if (cardRef.current) { // Ensure cardRef is not null
      cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  // Function to connect to MetaMask wallet
  const connectWallet = async () => {
    setErrorMessage(''); // Clear previous error message
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          onConnect(accounts[0]); // Pass the first connected account
        } else {
          setErrorMessage("No accounts found. Please unlock MetaMask.");
        }
      } catch (err) {
        // Handle specific MetaMask errors for better user feedback
        if (err.code === 4001) {
          setErrorMessage("Wallet connection rejected by the user.");
        } else if (err.code === -32002) {
          setErrorMessage("MetaMask request already pending. Please check your MetaMask extension.");
        } else {
          setErrorMessage("Connection failed. Please try again.");
          console.error("MetaMask connection error:", err);
        }
      }
    } else {
      setErrorMessage("MetaMask not found. Please install it to connect.");
    }
  };

  return (
    <motion.div className="connect-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Background elements */}
      <ParticleBackground />
      <div className="aurora-top"></div>
      <div className="aurora-bottom"></div>
      <div className="floating-circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <img src={ethIcon} className="float-icon icon1" alt="Ethereum icon" />
        <img src={lockIcon} className="float-icon icon2" alt="Lock icon" />
        <img src={fileIcon} className="float-icon icon3" alt="File icon" />
      </div>

      {/* Main connection card */}
      <motion.div
        className="connect-card glass-bg glow-border"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* MetaMask Logo */}
        <motion.img
          src={metaMaskLogo}
          alt="MetaMask Logo"
          className="meta-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        />
        {/* Welcome message */}
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          Welcome to Vaultify
        </motion.h2>
        {/* Connection instruction */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Please connect your MetaMask wallet to continue
        </motion.p>

        {/* Error message display */}
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

        {/* Connect button */}
        <motion.button
          className="connect-btn"
          onClick={connectWallet}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Connect MetaMask
        </motion.button>
      </motion.div>

      {/* Tagline at the bottom */}
      <motion.div className="connect-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p>A Decentralized Vault to Store & Verify Documents on Ethereum</p>
      </motion.div>
    </motion.div>
  );
}

export default ConnectWallet;
