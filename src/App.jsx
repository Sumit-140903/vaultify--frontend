import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import ConnectWallet from './pages/ConnectWallet';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import UploadDocument from './pages/UploadDocument';
import DocumentHistory from './pages/DocumentHistory';
import AccessRequests from './pages/AccessRequests';
import NotificationPage from './pages/NotificationPage';
import AdminPanel from './pages/AdminPanel';
import UserProfile from './pages/UserProfile';
import ZkpPage from './pages/ZkpPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function AppRouter() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientName, setClientName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleWalletConnect = (address) => {
    setWalletAddress(address);
    navigate('/login');
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setClientName(username);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setWalletAddress(null);
    setClientName('');
    navigate('/');
  };

  if (!walletAddress) {
    return <ConnectWallet onConnect={handleWalletConnect} />;
  }

  const showNav =
    isLoggedIn &&
    location.pathname !== '/register' &&
    location.pathname !== '/login';

  return (
    <div className="app-wrapper">
      {showNav && (
        <Navbar
          walletAddress={walletAddress}
          isLoggedIn={isLoggedIn}
          clientName={clientName}
          onLogout={handleLogout}
        />
      )}

      <div className="content-area">
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<UploadDocument />} />
              <Route path="/history" element={<DocumentHistory />} />
              <Route path="/requests" element={<AccessRequests />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/profile" element={<UserProfile clientName={clientName} />} />
              <Route path="/zkp" element={<ZkpPage />} />
            </>
          )}
        </Routes>
      </div>

      {showNav && <Footer />}
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
