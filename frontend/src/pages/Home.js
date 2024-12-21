import React, { useEffect, useState } from 'react';
import './styles/Home.css'; // Import the CSS file for styling
import binanceLogo from './assets/binance.png'; // Import Binance logo
import bybitLogo from './assets/bybit.png'; // Import Bybit logo
import mexcLogo from './assets/mexc.png'; // Import MEXC logo
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
          <img src={bybitLogo} alt="Bybit" className="logo" />
          <img src={binanceLogo} alt="Binance" className="logo binance-logo" />
          <img src={mexcLogo} alt="MEXC" className="logo" />
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
      <section className="cta">
        <h2>Join RoseXtrader Today</h2>
        <button className="cta-btn">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;