import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MyProfile from './MyProfile'; // Import MyProfile component
import Cashback from './Cashback'; // Import Cashback component
import Affiliate from './Affiliate'; // Import Affiliate component
import Payout from './Payout'; // Import Payout component
import FreeTrial from './FreeTrial'; // Import FreeTrial component
import './styles/Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const { logout, userProfile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to the home page after logging out
  };

  const handleProfileClick = () => {
    navigate('/dashboard/profile');
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
          <li>
            <Link to="/dashboard/free-trial" className="btn-link">Free Trial</Link>
          </li>
          <li>
            <Link to="/dashboard/cashback" className="btn-link">Cashback</Link>
          </li>
          <li>Community Chat</li>
          <li>
            <Link to="/dashboard/affiliate" className="btn-link">Affiliate</Link>
          </li>
          <li>Promotions</li>
          <li>
            <Link to="/dashboard/payout" className="btn-link">Payout</Link>
          </li>
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
        <div className="user-info" onClick={handleProfileClick}>
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
          <Route path="cashback" element={<Cashback />} />
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="payout" element={<Payout />} />
          <Route path="free-trial" element={<FreeTrial />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;