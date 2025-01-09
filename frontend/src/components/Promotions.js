import React from 'react';
import './styles/Promotions.css'; // Import the CSS file for styling

const Promotions = () => {
  return (
    <div className="promotions">
      <h2>Promotions</h2>
      <div className="promotion">
        <h3>10% Discount</h3>
        <p>Get a 10% lifetime discount for all Crypto Trader challenges.</p>
        <button className="claim-btn">Claim</button>
      </div>
      <div className="promotion">
        <h3>Referral Bonus</h3>
        <p>Refer a friend and get a $50 bonus for each successful referral.</p>
        <button className="claim-btn">Claim</button>
      </div>
      <div className="promotion">
        <h3>Seasonal Offer</h3>
        <p>Enjoy a 20% discount on all challenges during the holiday season.</p>
        <button className="claim-btn">Claim</button>
      </div>
    </div>
  );
};

export default Promotions;