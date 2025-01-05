import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MyProfile from './MyProfile'; // Import MyProfile component
import Cashback from './Cashback'; // Import Cashback component
import Affiliate from './Affiliate'; // Import Affiliate component
import Payout from './Payout'; // Import Payout component
import FreeTrial from './FreeTrial'; // Import FreeTrial component
import NewFundedAccount from './NewFundedAccount'; // Import NewFundedAccount component
import FundedAccounts from './FundedAccounts'; // Import FundedAccounts component
import Promotions from './Promotions'; // Import Promotions component
import Billing from './Billing'; // Import Billing component
import CommunityChat from './CommunityChat'; // Import CommunityChat component
import MarketHighlights from './MarketHighlights'; // Import MarketHighlights component
import TradingAcademy from './TradingAcademy'; // Import TradingAcademy component
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
          <Link to="/" className="company-name">FutureXFinance</Link>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashboard/new-funded-account" className="btn-link new-funded-account-btn">New Funded Account</Link>
          </li>
          <li>
            <Link to="/dashboard/funded-accounts" className="btn-link">Funded Accounts</Link>
          </li>
          <li>
            <Link to="/dashboard/free-trial" className="btn-link">Free Trial</Link>
          </li>
          <li>
            <Link to="/dashboard/cashback" className="btn-link">Cashback</Link>
          </li>
          <li>
            <Link to="/dashboard/promotions" className="btn-link">Promotions</Link>
          </li>
          <li>
            <Link to="/dashboard/community-chat" className="btn-link">Community Chat</Link>
          </li>
          <li>
            <Link to="/dashboard/affiliate" className="btn-link">Affiliate</Link>
          </li>
          <li>
            <Link to="/dashboard/payout" className="btn-link">Payout</Link>
          </li>
          <li>
            <Link to="/dashboard/market-highlights" className="btn-link">Market Highlights</Link>
          </li>
          <li>
            <Link to="/dashboard/trading-academy" className="btn-link">Trading Academy</Link>
          </li>
          <li>
            <Link to="/dashboard/billing" className="btn-link">Billing</Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="btn-link">My Profile</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="content">
        <div className="user-info">
          <div className="profile-clickable" onClick={handleProfileClick}>
            <img
              src={userProfile.profilePic ? URL.createObjectURL(userProfile.profilePic) : "/profile.png"}
              alt="Profile"
              className="profile-pic"
            />
            <span>{userProfile.firstName || 'My Account'}</span>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<div>Welcome to your FutureXFinance dashboard!</div>} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="cashback" element={<Cashback />} />
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="payout" element={<Payout />} />
          <Route path="free-trial" element={<FreeTrial />} />
          <Route path="new-funded-account" element={<NewFundedAccount />} />
          <Route path="funded-accounts" element={<FundedAccounts />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="billing" element={<Billing />} />
          <Route path="community-chat" element={<CommunityChat />} />
          <Route path="market-highlights" element={<MarketHighlights />} />
          <Route path="trading-academy" element={<TradingAcademy />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;