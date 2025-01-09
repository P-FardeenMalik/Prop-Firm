import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correctly import jwtDecode as a default export
import './styles/SignUp.css'; // Import the CSS file for styling
import { sendVerificationEmail, verifyOtp, createAccount, checkEmail } from '../services/authService'; // Import the mock backend service
import { useAuth } from '../context/AuthContext'; // Import useAuth from AuthContext

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleSignIn = useCallback(async (response) => {
    try {
      const userObject = jwtDecode(response.credential);
      const googleEmail = userObject.email;
      setEmail(googleEmail);

      // Directly create an account with Google email
      const accountResponse = await createAccount(googleEmail, 'google-oauth');
      console.log('Google sign-up response:', accountResponse); // Log the response
      if (accountResponse.success) {
        alert('Account created successfully');
        login(); // Update the authentication state
        navigate('/dashboard');
      } else {
        setErrorMessage(accountResponse.message || 'Failed to create account');
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setErrorMessage('An error occurred during Google sign-in');
    }
  }, [navigate, login]);

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Use environment variable
        callback: handleGoogleSignIn,
      });
      google.accounts.id.renderButton(
        document.getElementById('google-sign-in-button'),
        { theme: 'outline', size: 'large' }
      );
    };

    if (window.google) {
      initializeGoogleSignIn();
    } else {
      window.addEventListener('load', initializeGoogleSignIn);
    }

    return () => {
      window.removeEventListener('load', initializeGoogleSignIn);
    };
  }, [handleGoogleSignIn]); // Add handleGoogleSignIn to the dependency array

  const handleEmailBlur = async () => {
    const response = await checkEmail(email);
    if (response.exists) {
      setErrorMessage('User already exists');
    } else {
      setErrorMessage('');
    }
  };

  const handleEmailVerification = async () => {
    const response = await sendVerificationEmail(email);
    console.log('Email verification response:', response); // Log the response
    if (response.success) {
      setOtpSent(true);
      alert('OTP sent to your email');
    } else {
      setErrorMessage(response.message || 'Failed to send OTP');
    }
  };

  const handleOtpVerification = async () => {
    const isValid = await verifyOtp(email, otp);
    console.log('OTP verification response:', isValid); // Log the response
    if (isValid) {
      setIsEmailVerified(true);
      alert('Email verified successfully');
    } else {
      alert('Invalid OTP');
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const response = await createAccount(email, password);
    console.log('Sign-up response:', response); // Log the response
    if (response.success) {
      alert('Account created successfully');
      login(); // Update the authentication state
      navigate('/dashboard');
    } else {
      setErrorMessage(response.message || 'Failed to create account');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/sign-in');
  };

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <h2>Sign Up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label>Email</label>
          <div className="email-verification">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              placeholder="Enter your email"
            />
            <button onClick={handleEmailVerification}>Verify</button>
          </div>
        </div>
        {otpSent && !isEmailVerified && (
          <div className="form-group">
            <label>OTP</label>
            <div className="otp-verification">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <button onClick={handleOtpVerification}>Verify OTP</button>
            </div>
          </div>
        )}
        {isEmailVerified && (
          <>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
            <div className="sign-up-btn">
              <button onClick={handleSignUp}>Sign Up</button>
            </div>
          </>
        )}
        <div className="or-text">OR</div>
        <div className="google-sign-up">
          <div id="google-sign-in-button"></div>
        </div>
        <div className="login-prompt">
          <p>Already have an account? <button onClick={handleLoginRedirect}>Login</button></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;