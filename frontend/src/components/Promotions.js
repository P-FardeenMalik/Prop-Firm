import React from 'react';
import './styles/Promotions.css'; // Import the CSS file for styling

const Promotions = () => {
  return (
    <div className="promotions">
      <h2>Promotions</h2>
      <div className="promotion">
        <h3>10% discount</h3>
        <p>Get 10% lifetime discount for all FutureXTrader challenges</p>
        <button className="claim-btn">Claim</button>
      </div>
    </div>
  );
};

export default Promotions;