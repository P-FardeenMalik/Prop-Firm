import React, { useState } from 'react';
import './styles/CommunityChat.css'; // Import the CSS file for styling

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, timestamp: new Date() }]);
      setNewMessage('');
    }
  };

  return (
    <div className="community-chat">
      <h2>Community Chat</h2>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="message-text">{message.text}</span>
            <span className="message-timestamp">{message.timestamp.toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default CommunityChat;