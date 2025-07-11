import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import bgImage from '../assets/bg.jpg';
import heroImg from '../assets/Hero.jpg';
import secureIcon from '../assets/secure.png';
import blockchainIcon from '../assets/blockchain.png';
import shareIcon from '../assets/share.png';
import '../styles/Home.css';

function Home() {
  const features = [
    {
      title: 'Secure Storage',
      desc: 'Documents are encrypted and stored on IPFS for privacy and redundancy.',
      icon: secureIcon,
    },
    {
      title: 'Blockchain Verified',
      desc: 'Each file hash is securely recorded on Ethereum for tamper-proof proof.',
      icon: blockchainIcon,
    },
    {
      title: 'Controlled Sharing',
      desc: 'Easily manage document access with user-friendly request controls.',
      icon: shareIcon,
    },
  ];

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home-content">
        {/* ✅ Hero Section with background and glass effect */}
        <div className="hero-section-wrapper">
          <div
            className="hero-background"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          />
          <section className="hero-section glass-bg" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              className="hero-text"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="hero-title">Vaultify</h1>
              <p className="hero-subtitle">
                Secure • Verify • Share Documents with Blockchain Confidence
              </p>
            </motion.div>

            <motion.div
              className="hero-graphic"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={heroImg} alt="Vaultify Hero" className="hero-img" />
            </motion.div>
          </section>
        </div>

        {/* ✅ About Section */}
        <section className="about-section">
          <h2>About Vaultify</h2>
          <p>
            Vaultify is a decentralized document platform leveraging blockchain and IPFS for secure,
            transparent, and verifiable document management. Own your data—always accessible,
            verifiable, and securely shareable.
          </p>
        </section>

        {/* ✅ Features */}
        <section className="features-section">
          <h2>Why Choose Vaultify?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card tilt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
              >
                <img src={feature.icon} alt={feature.title} className="feature-img" />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ Gallery */}
        <section className="gallery-section">
          <h2>Platform Snapshots</h2>
          <div className="gallery-images">
            <img src={secureIcon} alt="Secure" className="gallery-img" />
            <img src={blockchainIcon} alt="Blockchain" className="gallery-img" />
            <img src={shareIcon} alt="Share" className="gallery-img" />
          </div>
        </section>

        {/* ✅ How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h4>1. Connect Wallet</h4>
              <p>Authenticate securely with MetaMask.</p>
            </div>
            <div className="step">
              <h4>2. Upload Files</h4>
              <p>Encrypt and store files on IPFS.</p>
            </div>
            <div className="step">
              <h4>3. Verify & Share</h4>
              <p>Verify hash on Ethereum and manage access.</p>
            </div>
          </div>
        </section>

        {/* ✅ Team */}
        <section className="team-section glass-bg">
          <h2>Meet the Creators</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/assets/avatar.png" alt="Amisha Bhagat" />
              <h4>Amisha Bhagat</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="team-card">
              <img src="/assets/avatar.png" alt="Ankit Kumar" />
              <h4>Ankit Kumar</h4>
              <p>Backend Developer</p>
            </div>
            <div className="team-card">
              <img src="/assets/avatar.png" alt="Sumit Thakur" />
              <h4>Sumit Thakur</h4>
              <p>Blockchain Engineer</p>
            </div>
          </div>
        </section>

        {/* ✅ CTA */}
        <section className="cta-section">
          <h2>Start Securing Your Documents Today</h2>
          <p>Join Vaultify and embrace a safer digital future.</p>
          <a href="/register" className="cta-button">Get Started</a>
        </section>
      </div>

      
    </motion.div>
  );
}

export default Home;
