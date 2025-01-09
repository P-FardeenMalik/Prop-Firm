import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth from AuthContext
import './styles/Header.css'; // Import the CSS file for styling

const Header = () => {
  const { isAuthenticated, userProfile } = useAuth(); // Use the authentication state and user profile
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFreeTrialClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard/free-trial');
    } else {
      navigate('/sign-in', { state: { from: '/dashboard/free-trial' } });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <h1>Crypto Trader</h1>
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/home#prop-firm">Prop-Firm</Link></li>
          <li><Link to="/home#cashback">Cashback</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {!isAuthenticated && <button className="btn" onClick={handleFreeTrialClick}>Free Trial</button>}
        {isAuthenticated ? (
          <Link to="/dashboard/profile" className="btn-link">
            <img
              src={userProfile.profilePic ? URL.createObjectURL(userProfile.profilePic) : "/profile.png"}
              alt="Profile"
              className="profile-pic"
            />
            <span>{userProfile.firstName || 'My Account'}</span>
          </Link>
        ) : (
          <Link to="/sign-in">
            <button className="btn">Sign In</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;