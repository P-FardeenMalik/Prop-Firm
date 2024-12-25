import React, { useState } from 'react';
import './styles/ForgotPassword.css'; // Import the CSS file for styling
import { sendPasswordResetEmail } from '../services/authService'; // Import the mock backend service

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    const response = await sendPasswordResetEmail(email);
    console.log('Password reset response:', response); // Log the response
    if (response.success) {
      setMessage('If this email is registered, you will receive a password reset link.');
    } else {
      setMessage('If this email is registered, you will receive a password reset link.');
    }
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
        <h2>Lost Password</h2>
        {message ? (
          <p>{message}</p>
        ) : (
          <>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="reset-password-btn">
              <button onClick={handleResetPassword}>Reset Password</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;