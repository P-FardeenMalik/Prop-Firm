import React, { useState } from 'react';
import './styles/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      await emailjs.send(
        'service_7009hn5', // Replace with your EmailJS service ID
        'template_edsf4bt', // Replace with your EmailJS template ID
        templateParams,
        'MkMUXAHijO3-0BM0A' // Replace with your EmailJS user ID
      );
      setStatus('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Error sending message');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Get in touch with us!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;