import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode as a named export
import './styles/SignUp.css'; // Import the CSS file for styling
import { sendVerificationEmail, verifyOtp, createAccount } from '../services/authService'; // Import the mock backend service

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: '455880184038-072n72giealrqsbo879tos8964q2bf8q.apps.googleusercontent.com', // Replace with your actual Google client ID
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
  }, []);

  const handleEmailVerification = async () => {
    const response = await sendVerificationEmail(email);
    if (response.success) {
      setOtpSent(true);
      alert('OTP sent to your email');
    } else {
      alert('Failed to send OTP');
    }
  };

  const handleOtpVerification = async () => {
    const isValid = await verifyOtp(email, otp);
    if (isValid) {
      setIsEmailVerified(true);
      alert('Email verified successfully');
    } else {
      alert('Invalid OTP');
    }
  };

  const handleGoogleSignIn = async (response) => {
    const userObject = jwtDecode(response.credential);
    const googleEmail = userObject.email;
    setEmail(googleEmail);
    // Send OTP to the Google email
    const emailResponse = await sendVerificationEmail(googleEmail);
    if (emailResponse.success) {
      setOtpSent(true);
      alert('OTP sent to your Google account');
    } else {
      alert('Failed to send OTP');
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const response = await createAccount(email, password);
    if (response.success) {
      alert('Account created successfully');
      navigate('/dashboard');
    } else {
      alert('Failed to create account');
    }
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label>Email</label>
        <div className="email-verification">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            <div className="password-verification">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="password-verification">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
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
    </div>
  );
};

export default SignUp;