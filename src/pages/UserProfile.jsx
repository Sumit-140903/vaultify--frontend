import React from 'react';
import PageWrapper from '../components/PageWrapper';
import avatarImg from '../assets/avatar.png'; // Replace with user's avatar if dynamic

import './UserProfile.css';

function UserProfile({ clientName, walletAddress, email }) {
  return (
    <PageWrapper>
      <div className="profile-container">
        <div className="profile-card">
          <img src={avatarImg} alt="User Avatar" className="profile-avatar" />

          <h2>{clientName}</h2>
          <p><strong>Email:</strong> {email || `${clientName.toLowerCase()}@gmail.com`}</p>
          <p><strong>Wallet:</strong> {walletAddress}</p>
          <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>

          <button className="profile-edit-button">Edit Profile (Coming Soon)</button>
        </div>
      </div>
    </PageWrapper>
  );
}

export default UserProfile;

