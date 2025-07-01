import React from 'react';
import ZkpVerifier from '../components/ZkpVerifier';
import PageWrapper from '../components/PageWrapper';
import '../styles/Zkp.css'; // Make sure this has the new dashboard-style CSS

function ZkpPage() {
  return (
    <PageWrapper title="ZKP Verification">
      <div className="zkp-page-wrapper">
        <h2 className="zkp-title">Zero-Knowledge Proof Verification</h2>
        <ZkpVerifier />
      </div>
    </PageWrapper>
  );
}

export default ZkpPage;
