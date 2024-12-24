import React, { useState } from 'react';
import './styles/Cashback.css'; // Import the CSS file for styling

const Cashback = () => {
  const [referralLink, setReferralLink] = useState('');
  const [cashbackAmount, setCashbackAmount] = useState(0);

  const handleReferralLinkChange = (e) => {
    setReferralLink(e.target.value);
  };

  const handleCalculateCashback = () => {
    // Implement the logic to calculate cashback based on the referral link
    // For now, let's assume a fixed cashback amount for demonstration purposes
    setCashbackAmount(50); // Example fixed cashback amount
  };

  return (
    <div className="cashback">
      <h2>Cashback Feature</h2>
      <div className="form-group">
        <label htmlFor="referralLink">Referral Link:</label>
        <input
          type="text"
          id="referralLink"
          value={referralLink}
          onChange={handleReferralLinkChange}
          placeholder="Enter your referral link"
        />
      </div>
      <button onClick={handleCalculateCashback}>Calculate Cashback</button>
      {cashbackAmount > 0 && (
        <div className="cashback-result">
          <p>Cashback Amount: ${cashbackAmount}</p>
        </div>
      )}
    </div>
  );
};

export default Cashback;