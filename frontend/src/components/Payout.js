import React from 'react';
import './styles/Payout.css'; // Import the CSS file for styling

const Payout = () => {
  return (
    <div className="payout">
      <h2>Payouts</h2>
      <div className="total-payouts">
        <p>Total Payouts:</p>
        <p>0.00 USDT</p>
      </div>
      <h3>Payouts History</h3>
      <p>No payout transactions found.</p>
    </div>
  );
};

export default Payout;