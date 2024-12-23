import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './styles/Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li>New Funded Account</li>
          <li>Funded Accounts</li>
          <li>Free Trial</li>
          <li>Cashback</li>
          <li>Community Chat</li>
          <li>Affiliate</li>
          <li>Promotions</li>
          <li>Payout</li>
          <li>Market Highlights</li>
          <li>Trading Academy</li>
          <li>Billing</li>
          <li>My Profile</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="content">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;