import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageWrapper from '../components/PageWrapper';
import Footer from '../components/Footer'; // ✅ import footer
import '../styles/AdminPanel.css';

function AdminPanel() {
  const [stats, setStats] = useState({
    users: 0,
    documents: 0,
    requests: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8000/api/admin/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data || {});
    } catch (err) {
      console.error('Error fetching admin stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <PageWrapper>
      <div className="admin-panel-container">
        <h2 className="admin-title">📊 Admin Dashboard</h2>
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <div className="admin-stats-grid">
            <div className="admin-card">
              <h3>Total Users</h3>
              <p>{stats.users}</p>
            </div>
            <div className="admin-card">
              <h3>Total Documents</h3>
              <p>{stats.documents}</p>
            </div>
            <div className="admin-card">
              <h3>Access Requests</h3>
              <p>{stats.requests}</p>
            </div>
          </div>
        )}
      </div>
      <Footer /> {/* ✅ Footer rendered here */}
    </PageWrapper>
  );
}

export default AdminPanel;
