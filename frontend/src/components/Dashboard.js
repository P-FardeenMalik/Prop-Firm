import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MyProfile from './MyProfile'; // Import MyProfile component
import './styles/Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const { logout, userProfile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="company-name">FutureXtrader</Link>
        </div>
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
          <li>
            <Link to="/dashboard/profile" className="btn-link">My Profile</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="content">
        <div className="user-info">
          <img
            src={userProfile.profilePic ? URL.createObjectURL(userProfile.profilePic) : "/profile.png"}
            alt="Profile"
            className="profile-pic"
          />
          <span>{userProfile.firstName || 'My Account'}</span>
        </div>
        <Routes>
          <Route path="/" element={<div>Welcome to your FutureXtrader dashboard!</div>} />
          <Route path="profile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;