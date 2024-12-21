import React from 'react';
import './styles/Home.css'; // Import the CSS file for styling
import binanceLogo from './assets/binance.png';
import bybitLogo from './assets/bybit.png';
import mexcLogo from './assets/mexc.png';
const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
        <h1>Crypto Traders Wanted RoseXtrader</h1>
        <h2>Trade with Crypto Prop Trading Firm</h2>
        <p>Trade crypto with an initial capital of up to $100,000 and keep up to 90% of your profits while we cover the losses. Connect your own Binance, ByBit, Mexc account to RoseXtrader, the crypto prop trading firm for serious traders.</p>
        <button className="cta-btn">Get Started</button>
        </div>
        <div className="hero-logos">
          <img src={binanceLogo} alt="Binance" />
          <img src={bybitLogo} alt="ByBit" />
          <img src={mexcLogo} alt="Mexc" />
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
        <h2>Join CryptoXtrader Today</h2>
        <button className="cta-btn">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;