import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation from react-router-dom
import './styles/Home.css'; // Import the CSS file for styling
import logos from './assets/logos.png'; // Import the combined logos image
import trustpilotLogo from './assets/trustpilot.png'; // Import Trustpilot logo
import { getTrustpilotReviews } from '../services/trustpilotService'; // Import the Trustpilot service

const Home = () => {
  const [trustpilotData, setTrustpilotData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchTrustpilotData = async () => {
      const data = await getTrustpilotReviews('YOUR_BUSINESS_UNIT_ID'); // Replace with your Trustpilot business unit ID
      setTrustpilotData(data);
    };

    fetchTrustpilotData();
  }, []);

  useEffect(() => {
    if (location.hash === '#prop-firm') {
      document.getElementById('prop-firm').scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#cashback') {
      document.getElementById('cashback').scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Crypto Traders Wanted FutureXFinance</h1>
          <h2>We Provide Two services</h2>
          <p>Get refund upto 50% of your trading fees from Binance, Bybit, OKX, Mexc, BingX, Bitget and Lbank Exchanges.</p>
          <p>Trade crypto with an initial capital of up to $100,000 and keep up to 90% of your profits while we cover the losses. Connect your own Binance, ByBit, Mexc account to FutureXFinance, the crypto prop trading firm for serious traders.</p>
          <button className="cta-btn" onClick={handleSignUpClick}>Get Started</button>
  
          {trustpilotData && (
            <div className="trustpilot-widgets">
              <div className="trustpilot-widget">
                <p>Trust Score: {trustpilotData.trustScore}</p>
              </div>
              <div className="trustpilot-widget">
                <p>Rating: {trustpilotData.rating}</p>
              </div>
              <div className="trustpilot-widget">
                <img src={trustpilotLogo} alt="Trustpilot" className="trustpilot-logo" />
              </div>
            </div>
          )}
        </div>
        <div className="hero-logos">
          <img src={logos} alt="Exchanges" className="logos" />
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Real-time Data</h3>
            <p>Access real-time cryptocurrency market data.</p>
          </div>
          <div className="feature-item">
            <h3>Secure Trading</h3>
            <p>Trade securely with our advanced security protocols.</p>
          </div>
          <div className="feature-item">
            <h3>24/7 Support</h3>
            <p>Get support anytime with our 24/7 customer service.</p>
          </div>
        </div>
      </section>
      <section id="prop-firm" className="how-it-works">
        <h2>How Prop-Firm works</h2>
        <p>To access a funded trading account, complete a trading challenge. The fee for this challenge is fully refundable with the first profit split. Read more about how it works here.</p>
        <div className="step-box">
          <h4>1. Apply for our program</h4>
          <p>Select your preferred account size and easily connect your exchange account to FutureXFinance via API.</p>
        </div>
        <div className="step-box">
          <h4>2. Complete the Crypto Trading Challenge</h4>
          <p>Stick to the trading rules and demonstrate that you can consistently be a profitable trader. Your primary goal is to achieve a total profit target of 15% across two phases with no time limit.</p>
        </div>
        <div className="step-box">
          <h4>3. Performance & KYC Check</h4>
          <p>We'll review your results and check your identity (KYC) to start our collaboration. After that, we'll offer you a contract with our Crypto Prop Trading Firm.</p>
        </div>
        <div className="step-box">
          <h4>4. Get Your Crypto Trading Account</h4>
          <p>We offer every trader the opportunity for a profit split ranging from 70% to 90%. Start at 70% and scale up by 5% every 4 months.</p>
        </div>
        <div className="step-box">
          <h4>Your First Payout</h4>
          <p>FutureXFinance offers the fastest payouts in the industry. You can request a payout after 1 calendar day from the first trade executed on the funded account. Payouts are processed within 12-24 hours and paid in USDT.</p>
        </div>
      </section>
      <section id="cashback" className="how-it-works">
        <h3>How Cashback works</h3>
        <p>3 easy steps</p>
        <div className="step-box">
          <h4>1. Redeem referral offers</h4>
          <p>Sign up here to create an account, go to Cashback page and Follow the exchange links to create an account and get discounts on trading.</p>
        </div>
        <div className="step-box">
          <h4>2. Join The Ref</h4>
          <p>Provide the User ID for each exchange, and a deposit address for us to pay your refunds.</p>
        </div>
        <div className="step-box">
          <h4>3. Get paid</h4>
          <p>On the 1st of each month, we will deposit half of our commissions in USDT to your deposit address.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Join FutureXFinance Today</h2>
        <button className="sign-up-btn" onClick={handleSignUpClick}>Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;