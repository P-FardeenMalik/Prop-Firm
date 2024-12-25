import React from 'react';
import './styles/Billing.css'; // Import the CSS file for styling

const Billing = () => {
  return (
    <div className="billing">
      <h2>Billing</h2>
      <div className="billing-item">
        <h3>Ultimate</h3>
        <p>359.10$</p>
        <p>ZEN payment</p>
        <p>2024-12-08 06:05:14</p>
        <p>Status: <span className="status-failed">failed</span></p>
      </div>
      <div className="billing-item">
        <h3>Ultimate</h3>
        <p>359.10$</p>
        <p>ZEN payment</p>
        <p>2024-12-08 03:11:48</p>
        <p>Status: <span className="status-pending">pending</span></p>
      </div>
      <div className="billing-item">
        <h3>Ultimate</h3>
        <p>379.05$</p>
        <p>ZEN payment</p>
        <p>2024-12-02 06:39:31</p>
        <p>Status: <span className="status-pending">pending</span></p>
      </div>
    </div>
  );
};

export default Billing;