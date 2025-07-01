import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <PageWrapper>
      <div className="page-wrapper">
        <div className="dashboard-container">
          <h2 className="dashboard-title">Welcome to Your Vault</h2>

          <div className="card-grid">
            <div className="doc-card glass">
              <img src="/src/assets/license.png" alt="Driving License" className="doc-img" />
              <h3>Driving License</h3>
              <p>Issued: Jan 2024</p>
              <button className="view-btn">View</button>
            </div>

            <div className="doc-card glass">
              <img src="/src/assets/aadhaar.png" alt="Aadhaar Card" className="doc-img" />
              <h3>Aadhaar Card</h3>
              <p>Issued: Dec 2023</p>
              <button className="view-btn">View</button>
            </div>

            <div className="doc-card glass">
              <img src="/src/assets/rc.png" alt="PAN Card" className="doc-img" />
              <h3>PAN Card</h3>
              <p>Issued: Mar 2024</p>
              <button className="view-btn">View</button>
            </div>

            <div className="doc-card glass add-card">
              <button className="add-btn">+ Add Document</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}

export default Dashboard;
