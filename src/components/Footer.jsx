import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Branding Section */}
        <div>
          <h3>Vaultify</h3>
          <p>
            Vaultify is a secure, decentralized document management platform powered by Ethereum and IPFS.
            Maintain privacy, control access, and verify authenticity—effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/upload">Upload</Link></li>
            <li><Link to="/access-requests">Access Requests</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vaultify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
