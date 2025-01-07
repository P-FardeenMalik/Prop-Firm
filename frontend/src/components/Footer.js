import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const location = useLocation();
  const hideFooterRoutes = ['/signin', '/signup'];

  if (hideFooterRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a crypto prop trading firm dedicated to providing the best services to our clients. Join us and start trading today!
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://x.com/FutureXFinance_" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FutureXFinance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;