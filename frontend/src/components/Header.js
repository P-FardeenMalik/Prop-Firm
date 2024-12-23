import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth from AuthContext
import './styles/Header.css'; // Import the CSS file for styling

const Header = () => {
  const { isAuthenticated } = useAuth(); // Use the authentication state

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>RoseXtrader</h1>
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="btn">Free Trial</button>
        {isAuthenticated ? (
          <Link to="/dashboard">
            <button className="btn">My Account</button>
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