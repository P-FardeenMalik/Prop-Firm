import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'; // Import the CSS file for styling

const Header = () => {
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
        <button className="btn">Sign In</button>
      </div>
    </header>
  );
};

export default Header;