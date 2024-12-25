import React from 'react';
import './styles/TradingAcademy.css'; // Import the CSS file for styling

const TradingAcademy = () => {
  const videos = [
    { title: 'Introduction to Trading', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Advanced Trading Strategies', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Risk Management', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Technical Analysis', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  return (
    <div className="trading-academy">
      <h2>Trading Academy</h2>
      <p>Welcome to the Trading Academy. Here you can find educational videos to help you learn and improve your trading skills.</p>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <h3>{video.title}</h3>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingAcademy;