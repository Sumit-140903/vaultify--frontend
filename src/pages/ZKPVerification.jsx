import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import '../styles/ZKPVerification.css';

function ZKPVerification() {
  const [docId, setDocId] = useState('');
  const [proofStatus, setProofStatus] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();

    if (!docId) {
      alert('Please enter a document ID.');
      return;
    }

    // Simulated ZKP check
    setProofStatus('verifying');
    setTimeout(() => {
      const isValid = Math.random() > 0.2;
      setProofStatus(isValid ? 'verified' : 'failed');
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="zkp-container">
        <h2>Zero-Knowledge Proof Verification</h2>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter Document ID or Hash"
            value={docId}
            onChange={(e) => setDocId(e.target.value)}
          />
          <button type="submit">Verify</button>
        </form>

        {proofStatus && (
          <div className="zkp-status">
            {proofStatus === 'verifying' && <p>🔄 Verifying proof...</p>}
            {proofStatus === 'verified' && (
              <p className="verified">✅ Document is Authentic</p>
            )}
            {proofStatus === 'failed' && (
              <p className="failed">❌ Invalid or Tampered Document</p>
            )}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default ZKPVerification;
