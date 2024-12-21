import React, { useEffect, useState } from 'react';
import './styles/Home.css'; // Import the CSS file for styling
import logos from './assets/logos.png'; // Import the combined logos image
import discordLogo from './assets/discord.png'; // Import Discord logo
import trustpilotLogo from './assets/trustpilot.png'; // Import Trustpilot logo
import { getTrustpilotReviews } from '../services/trustpilotService'; // Import the Trustpilot service

const Home = () => {
  const [trustpilotData, setTrustpilotData] = useState(null);

  useEffect(() => {
    const fetchTrustpilotData = async () => {
      const data = await getTrustpilotReviews('YOUR_BUSINESS_UNIT_ID'); // Replace with your Trustpilot business unit ID
      setTrustpilotData(data);
    };

    fetchTrustpilotData();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Crypto Traders Wanted RoseXtrader</h1>
          <h2>Trade with Crypto Prop Trading Firm</h2>
          <p>Trade crypto with an initial capital of up to $100,000 and keep up to 90% of your profits while we cover the losses. Connect your own Binance, ByBit, Mexc account to RoseXtrader, the crypto prop trading firm for serious traders.</p>
          <button className="cta-btn">Get Started</button>
          <div className="discord-link">
            <img src={discordLogo} alt="Discord" className="discord-logo" />
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Join our Discord</a>
          </div>
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
      <section className="how-it-works">
        <h2>How it works</h2>
        <p>To access a funded trading account, complete a trading challenge. The fee for this challenge is fully refundable with the first profit split. Read more about how it works here.</p>
        <div className="steps">
          <div className="step">
            <h3>1. Apply for our program</h3>
            <p>Select your preferred account size and easily connect your exchange account to HyroTrader via API.</p>
          </div>
          <div className="step">
            <h3>2. Complete the Crypto Trading Challenge</h3>
            <p>Stick to the trading rules and demonstrate that you can consistently be a profitable trader. Your primary goal is to achieve a total profit target of 15% across two phases with no time limit.</p>
          </div>
          <div className="step">
            <h3>3. Performance & KYC Check</h3>
            <p>We'll review your results and check your identity (KYC) to start our collaboration. After that, we'll offer you a contract with our Crypto Prop Trading Firm.</p>
          </div>
          <div className="step">
            <h3>4. Get Your Crypto Trading Account</h3>
            <p>We offer every trader the opportunity for a profit split ranging from 70% to 90%. Start at 70% and scale up by 5% every 4 months.</p>
          </div>
          <div className="step">
            <h3>Your First Payout</h3>
            <p>HyroTrader offers the fastest payouts in the industry. You can request a payout after 1 calendar day from the first trade executed on the funded account. Payouts are processed within 12-24 hours and paid in USDT.</p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Join RoseXtrader Today</h2>
        <button className="cta-btn">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;