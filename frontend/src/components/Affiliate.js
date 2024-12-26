import React, { useState } from 'react';
import './styles/Affiliate.css'; // Import the CSS file for styling

const Affiliate = () => {
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [promotionMethod, setPromotionMethod] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle the form submission
    console.log('Affiliate application submitted:', { username, website, promotionMethod, termsAccepted });
  };

  return (
    <div className="affiliate">
      <h2>Affiliate</h2>
      <p>Unlock the full potential of your community, website, blog, or social media channel for effortless profit. Refer a new trader or sub-affiliate, and enjoy an enticing 10%+ commission on each of their purchases.</p>
      <p><a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Check our Terms and Conditions</a></p>
      <h3>My Affiliate Coupons</h3>
      <p>Sorry, you don't currently have any active affiliate coupons.</p>
      <h3>Register New Affiliate Account:</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="website">Your Website:*</label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="promotionMethod">How will you promote us?*</label>
          <textarea
            id="promotionMethod"
            value={promotionMethod}
            onChange={(e) => setPromotionMethod(e.target.value)}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="termsAccepted"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <label htmlFor="termsAccepted">I have read and agree to the Affiliate Terms and Privacy Policy.</label>
        </div>
        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Affiliate;