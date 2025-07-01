import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import '../styles/NotificationPage.css';

function NotificationPage() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      requester: '0x1a3f...7b91',
      docName: 'PAN Card',
      status: 'pending',
    },
    {
      id: 2,
      requester: '0x29bc...ad4e',
      docName: 'Aadhar Card',
      status: 'pending',
    },
  ]);

  const handleAction = (id, action) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: action } : req
    );
    setRequests(updated);
  };

  return (
    <PageWrapper>
      <div className="notification-container">
        <h2>Document Access Requests</h2>
        {requests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          <ul className="notification-list">
            {requests.map((req) => (
              <li key={req.id} className="notification-item">
                <div>
                  <strong>{req.docName}</strong> requested by{' '}
                  <code>{req.requester}</code>
                </div>
                <div className="notif-actions">
                  {req.status === 'pending' ? (
                    <>
                      <button onClick={() => handleAction(req.id, 'approved')}>Approve</button>
                      <button onClick={() => handleAction(req.id, 'denied')}>Deny</button>
                    </>
                  ) : (
                    <span className={`badge ${req.status}`}>
                      {req.status === 'approved' ? '✅ Approved' : '❌ Denied'}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageWrapper>
  );
}

export default NotificationPage;
