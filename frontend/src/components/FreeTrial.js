import React, { useState } from 'react';
import './styles/FreeTrial.css'; // Import the CSS file for styling

const FreeTrial = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleStartTrial = () => {
    // Implement the logic to start the trial challenge
    console.log('Trial challenge started with size:', selectedSize);
  };

  return (
    <div className="free-trial">
      <h2>Free Trial</h2>
      <p>Select size:</p>
      <div className="size-options">
        {['5 000 USDT', '10 000 USDT', '25 000 USDT', '50 000 USDT', '100 000 USDT'].map((size) => (
          <label key={size}>
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={handleSizeChange}
            />
            {size}
          </label>
        ))}
      </div>
      <button className="start-trial-btn" onClick={handleStartTrial}>Start trial challenge</button>
    </div>
  );
};

export default FreeTrial;