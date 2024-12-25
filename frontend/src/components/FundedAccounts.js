import React from 'react';
import './styles/FundedAccounts.css'; // Import the CSS file for styling

const FundedAccounts = () => {
  return (
    <div className="funded-accounts">
      <h2>Challenges</h2>
      <div className="challenges">
        <div className="challenge-category">
          <h3>Ongoing</h3>
          <p>No ongoing challenges found.</p>
        </div>
        <div className="challenge-category">
          <h3>Failed</h3>
          <p>No failed challenges found.</p>
        </div>
        <div className="challenge-category">
          <h3>Expired</h3>
          <p>No expired challenges found.</p>
        </div>
      </div>
      <button className="start-new-challenge-btn">+ Start New Challenge</button>
    </div>
  );
};

export default FundedAccounts;