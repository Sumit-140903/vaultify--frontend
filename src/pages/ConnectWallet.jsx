// src/components/ConnectWallet.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './ConnectWallet.css';
import metaMaskLogo from '../assets/metamask.png';
import ethIcon from '../assets/eth.svg';
import lockIcon from '../assets/lock.svg';
import fileIcon from '../assets/file.svg';
import ParticleBackground from './ParticleBackground';

function ConnectWallet({ onConnect }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        onConnect(accounts[0]);
      } catch (err) {
        alert("Connection rejected.");
        console.error(err);
      }
    } else {
      alert("MetaMask not found. Please install it.");
    }
  };

  return (
    <motion.div className="connect-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <ParticleBackground />
      <div className="aurora-top"></div>
      <div className="aurora-bottom"></div>
      <div className="floating-circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <img src={ethIcon} className="float-icon icon1" alt="eth" />
        <img src={lockIcon} className="float-icon icon2" alt="lock" />
        <img src={fileIcon} className="float-icon icon3" alt="file" />
      </div>

      <motion.div
        className="connect-card glass-bg glow-border"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img src={metaMaskLogo} alt="MetaMask Logo" className="meta-logo" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} />
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Welcome to Vaultify</motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Please connect your MetaMask wallet to continue
        </motion.p>
        <motion.button className="connect-btn" onClick={connectWallet} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          🦊 Connect MetaMask
        </motion.button>
      </motion.div>

      <motion.div className="connect-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p>⚡ A Decentralized Vault to Store & Verify Documents on Ethereum</p>
      </motion.div>
    </motion.div>
  );
}

export default ConnectWallet;
