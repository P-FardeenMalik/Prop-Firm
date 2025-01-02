import React, { useState } from 'react';
import './styles/Cashback.css'; // Import the CSS file for styling

const Cashback = () => {
  const [cashbackAmount, setCashbackAmount] = useState(0);
  const [depositAddress, setDepositAddress] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const handleCalculateCashback = () => {
    // Implement the logic to calculate cashback
    // For now, we'll just set a dummy cashback amount
    setCashbackAmount(100);
  };

  const handleDepositAddressChange = (e) => {
    setDepositAddress(e.target.value);
  };

  const handleDetailsClick = (exchange) => {
    let content;
    switch (exchange.name) {
      case 'Binance':
        content = (
          <div className="modal-content">
            <h3>Binance</h3>
            <p>Total possible trading fee savings</p>
            <p>Spot trading: 30.5%</p>
            <p>Futures trading: 25%</p>
            <p>
              Get 20% off spot trading and 10% off futures trading (plus an additional 10.5% back on spot trading and 15% back on futures trading when you sign up with The Ref). Excludes VIP3 or higher.
            </p>
            <p>Other Bonuses: $100 sign up bonus</p>
            <a href="https://accounts.binance.com/register?ref=T7SYW1LE" target="_blank" rel="noopener noreferrer">Sign up</a>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        );
        break;
      case 'Bybit':
        content = (
          <div className="modal-content">
            <h3>Bybit</h3>
            <p>Total possible trading fee savings</p>
            <p>Spot trading: 20%</p>
            <p>Futures trading: 20%</p>
            <p>
              Get 20% off¹ spot and futures trading when you sign up with The Ref
            </p>
            <p>¹ Due to Bybit policy changes, The Ref monthly payments for new users in the European Economic Area (EEA) will be paused in Q1 2025</p>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        );
        break;
      case 'OKX':
        content = (
          <div className="modal-content">
            <h3>OKX</h3>
            <p>Total possible trading fee savings</p>
            <p>Spot trading: 25%</p>
            <p>Futures trading: 25%</p>
            <p>
              Get 20% off spot and futures trading (plus get an additional 5% back when you sign up with The Ref)
            </p>
            <a href="https://www.okx.com/join/42505953" target="_blank" rel="noopener noreferrer">Sign up</a>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        );
        break;
      case 'HTX':
        content = (
          <div className="modal-content">
            <h3>HTX</h3>
            <p>Total possible trading fee savings</p>
            <p>Spot trading: 40%</p>
            <p>Futures trading: 45%</p>
            <p>
              Get 30% off spot and futures trading (plus get an additional 10% back on spot trading and 15% back on futures trading when you sign up with The Ref). Excludes HTX Market Makers.
            </p>
            <a href="https://www.htx.co.zw/invite/en-us/1h?invite_code=t8y89223" target="_blank" rel="noopener noreferrer">Sign up</a>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        );
        break;
      case 'Gate.io':
        content = (
          <div className="modal-content">
            <h3>Gate.io</h3>
            <p>Total possible trading fee savings</p>
            <p>Spot trading: 50%</p>
            <p>Futures trading: 50%</p>
            <p>
              Get 20% spot and futures trading (plus get an additional 30% back when you sign up with The Ref)
            </p>
            <a href="https://www.gate.io/referral/invite/THEREFIO_0_103" target="_blank" rel="noopener noreferrer">Sign up</a>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        );
        break;
      case 'MEXC':
        content = (
          <div className="modal-content">
            <h3>MEXC</h3>
            <p>Total possible trading fee savings</p>
            <p>Spot trading: 7%</p>
            <p>
              Get 4% off trading fees (plus get an additional 3% back when you sign up with The Ref)
            </p>
            <a href="https://app.MEXC.xyz/join/THEREF" target="_blank" rel="noopener noreferrer">Sign up</a>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        );
        break;
      default:
        content = null;
    }
    setModalContent(content);
  };

  return (
    <div className="cashback">
      <h2>Step 1: Redeem referral offers</h2>
      <p>Use the referral links below to create an account on one or more exchanges.</p>
      <div className="exchange-list">
        {[
          { name: 'Binance', cashback: '25.0%' },
          { name: 'Bybit', cashback: '40.0%' },
          { name: 'OKX', cashback: '20%' },
          { name: 'HTX', cashback: '45%' },
          { name: 'Gate.io', cashback: '50%' },
          { name: 'MEXC', cashback: '40.0%' },
        ].map((exchange) => (
          <div className="exchange-item" key={exchange.name}>
            <h3>{exchange.name}</h3>
            <p>Get up to</p>
            <p className="cashback-percentage">{exchange.cashback}</p>
            <button className="details-btn" onClick={() => handleDetailsClick(exchange)}>Details</button>
            <button className="signup-btn">Sign up</button>
          </div>
        ))}
      </div>

      <h2>Step 2: Join The Ref</h2>
      <p>After signing up with one or more of the exchanges above, provide your exchange User ID and deposit address so we can process your monthly refunds. We will never ask for your password or private key.</p>
      <div className="input-group">
        <label htmlFor="binanceUserId">Binance.com</label>
        <input
          type="text"
          id="binanceUserId"
          placeholder="Enter your Binance.com User ID"
        />
      </div>
      <div className="input-group">
        <label htmlFor="bybitUserId">Bybit.com</label>
        <input
          type="text"
          id="bybitUserId"
          placeholder="Enter your Bybit.com User ID"
        />
      </div>
      <div className="input-group">
        <label htmlFor="okxUserId">OKX.com</label>
        <input
          type="text"
          id="okxUserId"
          placeholder="Enter your OKX.com User ID"
        />
      </div>
      <div className="input-group">
        <label htmlFor="htxUserId">HTX.com</label>
        <input
          type="text"
          id="htxUserId"
          placeholder="Enter your HTX.com User ID"
        />
      </div>
      <div className="input-group">
        <label htmlFor="gateUserId">Gate.io</label>
        <input
          type="text"
          id="gateUserId"
          placeholder="Enter your Gate.io User ID"
        />
      </div>
      <div className="input-group">
        <label htmlFor="MEXCUserId">MEXC.xyz</label>
        <input
          type="text"
          id="MEXCUserId"
          placeholder="Enter your MEXC.xyz User ID"
        />
      </div>
      <div className="input-group">
        <label htmlFor="depositAddress">Refund Payment Address</label>
        <input
          type="text"
          id="depositAddress"
          value={depositAddress}
          onChange={handleDepositAddressChange}
          placeholder="Enter your USDT (BEP-20 Network) payment address that we will pay your refunds to."
        />
      </div>
      <div className="submit-btn-container">
        <button className="submit-btn" onClick={handleCalculateCashback}>Submit</button>
      </div>
      {cashbackAmount > 0 && (
        <div className="cashback-result">
          <p>Cashback Amount: ${cashbackAmount}</p>
        </div>
      )}

      {modalContent && (
        <div className="modal">
          <div className="modal-overlay" onClick={() => setModalContent(null)}></div>
          <div className="modal-container">
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cashback;