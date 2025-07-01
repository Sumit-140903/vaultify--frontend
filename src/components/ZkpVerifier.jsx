import React, { useState } from 'react';
import axios from 'axios';

function ZkpVerifier() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const verifyZKP = async () => {
    setLoading(true);
    setResult('');
    try {
      // Correctly import JSON files using .default
      const proofModule = await import('../zkp/proof.json');
      const publicSignalsModule = await import('../zkp/public.json');

      const proof = proofModule.default;
      const publicSignals = publicSignalsModule.default;

      // POST request to your backend verification route
      const response = await axios.post('http://localhost:8000/api/zk/verify-proof', {
        proof,
        publicSignals
      });

      setResult(response.data.message);
    } catch (error) {
      console.error('Verification error:', error);
      setResult(error.response?.data?.message || 'Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button
        onClick={verifyZKP}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        disabled={loading}
      >
        {loading ? 'Verifying...' : 'Verify Proof'}
      </button>
      {result && <p style={{ marginTop: '20px' }}>{result}</p>}
    </div>
  );
}

export default ZkpVerifier;
