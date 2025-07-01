import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // Show splash for 2.5 sec
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <h1 className="vault-title">🚀 Vaultify</h1>
      <p className="vault-subtitle">Empowering Web3 Document Trust</p>
    </div>
  );
}

export default SplashScreen;
