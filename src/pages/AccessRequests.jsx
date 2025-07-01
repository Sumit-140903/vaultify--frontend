import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageWrapper from '../components/PageWrapper';

function AccessRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8000/api/requests', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(res.data.requests || []);
    } catch (err) {
      console.error('Error fetching requests:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    try {
      const token = localStorage.getItem('token');
      const endpoint = `http://localhost:8000/api/requests/${id}/${action}`;
      await axios.post(endpoint, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests((prev) => prev.filter((req) => req._id !== id));
    } catch (err) {
      console.error(`Failed to ${action} request:`, err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <PageWrapper>
      <div style={{ padding: '2rem' }}>
        <h2>Access Requests</h2>
        {loading ? (
          <p>Loading...</p>
        ) : requests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          <ul>
            {requests.map((req) => (
              <li key={req._id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                <p><strong>Requester:</strong> {req.requester?.email || 'Unknown'}</p>
                <p><strong>Document:</strong> {req.document?.title || 'Untitled'}</p>
                <div style={{ marginTop: '0.5rem' }}>
                  <button onClick={() => handleAction(req._id, 'approve')} style={{ marginRight: '1rem', padding: '6px 12px' }}>
                    ✅ Approve
                  </button>
                  <button onClick={() => handleAction(req._id, 'deny')} style={{ padding: '6px 12px' }}>
                    ❌ Deny
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageWrapper>
  );
}

export default AccessRequests;
