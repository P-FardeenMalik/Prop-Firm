import React from 'react';
import './styles/MarketHighlights.css'; // Import the CSS file for styling

const MarketHighlights = () => {
  return (
    <div className="market-highlights">
      <h2>Market Highlights</h2>
      <p>Stay informed with essential updates on various cryptocurrencies. We monitor key market highlights to keep you in the loop.</p>

      <div className="highlight-section">
        <h3>Bullish Pattern Breakouts</h3>
        <p>We automatically identify 26 commonly used chart patterns across multiple time intervals, saving traders a ton of time.</p>
        <p>Price patterns appear when traders are buying and selling at certain levels, and therefore, price oscillates between these levels, creating patterns.</p>
        <p>When price finally does break out of the price pattern, it can represent a significant change in sentiment.</p>
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Last Price</th>
              <th>1D</th>
              <th>Pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PROM Prom</td>
              <td>6.354</td>
              <td>3.53%</td>
              <td>Flag</td>
            </tr>
          </tbody>
        </table>
        <button className="see-more-btn">See more...</button>
      </div>

      <div className="highlight-section">
        <h3>Bearish Pattern Breakouts</h3>
        <p>We automatically identify 26 commonly used chart patterns across multiple time intervals, saving traders a ton of time.</p>
        <p>Price patterns appear when traders are buying and selling at certain levels, and therefore, price oscillates between these levels, creating patterns.</p>
        <p>When price finally does break out of the price pattern, it can represent a significant change in sentiment.</p>
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Last Price</th>
              <th>1D</th>
              <th>Pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XVG Verge</td>
              <td>0.01382504</td>
              <td>13.09%</td>
              <td>Triangle</td>
            </tr>
            <tr>
              <td>ENS Ethereum Name Service</td>
              <td>36.805</td>
              <td>1.99%</td>
              <td>Rising Wedge</td>
            </tr>
            <tr>
              <td>ENA Ethena</td>
              <td>1.0337</td>
              <td>0.90%</td>
              <td>Channel Up</td>
            </tr>
          </tbody>
        </table>
        <button className="see-more-btn">See more...</button>
      </div>

      <div className="highlight-section">
        <h3>Strong Uptrend</h3>
        <p>This market screen shows coins with prices in a strong Uptrend across all three time horizons: Short-Medium and Long-Term. Trend trading works because price trends have a tendency to continue. Identifying a trend is half the battle. It greatly increases your winning probabilities.</p>
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Last Price</th>
              <th>1D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SUI Sui</td>
              <td>4.5518</td>
              <td>1.10%</td>
            </tr>
            <tr>
              <td>HBAR Hedera Hashgraph</td>
              <td>0.32158</td>
              <td>6.24%</td>
            </tr>
            <tr>
              <td>LEO UNUS SED LEO</td>
              <td>9.597</td>
              <td>1.92%</td>
            </tr>
          </tbody>
        </table>
        <button className="see-more-btn">See more...</button>
      </div>

      <div className="highlight-section">
        <h3>Strong Downtrend</h3>
        <p>This market screen shows coins with prices in a strong Downtrend across all three time horizons: Short-Medium- and Long-Term.</p>
        <p>Trend is your friend, goes the old adage. That means, find an uptrend, and ride it for potentially big gains. Trend trading works because price trends have a tendency to continue. Identifying a trend is half the battle. It greatly increases your winning probabilities.</p>
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Last Price</th>
              <th>1D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>POPCAT Popcat (SOL)</td>
              <td>0.822971</td>
              <td>6.57%</td>
            </tr>
            <tr>
              <td>1000SATS 1000SATS</td>
              <td>0.00018535</td>
              <td>3.35%</td>
            </tr>
            <tr>
              <td>GOAT Goatseus Maximus</td>
              <td>0.49179998</td>
              <td>-8.13%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketHighlights;