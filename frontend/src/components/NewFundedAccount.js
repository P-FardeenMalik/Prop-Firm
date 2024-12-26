import React, { useState } from 'react';
import './styles/NewFundedAccount.css'; // Import the CSS file for styling

const NewFundedAccount = () => {
  const [challengeType, setChallengeType] = useState('One-Step');
  const [tradingCapital, setTradingCapital] = useState('25,000 USDT');
  const [challengePrice, setChallengePrice] = useState('$299.00');

  const handleChallengeTypeChange = (e) => {
    setChallengeType(e.target.value);
  };

  const handleTradingCapitalChange = (e) => {
    const selectedCapital = e.target.value;
    setTradingCapital(selectedCapital);
    switch (selectedCapital) {
      case '5,000 USDT':
        setChallengePrice('$89.00');
        break;
      case '10,000 USDT':
        setChallengePrice('$159.00');
        break;
      case '25,000 USDT':
        setChallengePrice('$299.00');
        break;
      case '50,000 USDT':
        setChallengePrice('$399.00');
        break;
      case '100,000 USDT':
        setChallengePrice('$599.00');
        break;
      default:
        setChallengePrice('$299.00');
    }
  };

  return (
    <div className="new-funded-account">
      <h2>Start New Challenge</h2>
      <div className="challenge-type">
        <h3>Challenge Type</h3>
        <label>
          <input
            type="radio"
            name="challengeType"
            value="One-Step"
            checked={challengeType === 'One-Step'}
            onChange={handleChallengeTypeChange}
          />
          One-Step
        </label>
        <label>
          <input
            type="radio"
            name="challengeType"
            value="Two-Step"
            checked={challengeType === 'Two-Step'}
            onChange={handleChallengeTypeChange}
          />
          Two-Step
        </label>
        <p>With One-Step, reach your funded account faster with just 10 trading days and a 10% profit target — no verification phase required!</p>
      </div>
      <div className="trading-capital">
        <h3>Trading Capital</h3>
        <select value={tradingCapital} onChange={handleTradingCapitalChange}>
          <option value="5,000 USDT">5,000 USDT</option>
          <option value="10,000 USDT">10,000 USDT</option>
          <option value="25,000 USDT">25,000 USDT</option>
          <option value="50,000 USDT">50,000 USDT</option>
          <option value="100,000 USDT">100,000 USDT</option>
        </select>
        <p>Challenge price: {challengePrice}</p>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <p>Challenge Price: {challengePrice}</p>
        <p>Challenge Type: {challengeType}</p>
        <p>Trading Capital: {tradingCapital}</p>
        <p>Receive a funded challenge account with a starting balance of {tradingCapital}</p>
        <ul>
          <li>Starting Balance: {tradingCapital}</li>
          <li>Up To 90% Profit Share</li>
          <li>No Risks included</li>
        </ul>
      </div>
    </div>
  );
};

export default NewFundedAccount;