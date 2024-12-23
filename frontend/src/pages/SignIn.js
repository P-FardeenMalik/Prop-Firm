import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correctly import jwtDecode as a named export
import './styles/SignIn.css'; // Import the CSS file for styling
import { signInWithEmail, signInWithGoogle } from '../services/authService'; // Import the mock backend service
import { useAuth } from '../context/AuthContext'; // Import useAuth from AuthContext

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleGoogleSignIn = useCallback(async (response) => {
    const userObject = jwtDecode(response.credential);
    const googleEmail = userObject.email;

    // Sign in with Google email
    const signInResponse = await signInWithGoogle(googleEmail);
    console.log('Google sign-in response:', signInResponse); // Log the response
    if (signInResponse.success) {
      login(); // Update the authentication state
      navigate('/dashboard');
    } else {
      setErrorMessage('Account not found. Please sign up.');
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

  const handleSignIn = async () => {
    const response = await signInWithEmail(email, password);
    console.log('Sign-in response:', response); // Log the response
    if (response.success) {
      login(); // Update the authentication state
      navigate('/dashboard');
    } else {
      setErrorMessage(response.message || 'Invalid email or password');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/sign-up');
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="sign-in-btn">
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      <div className="or-text">OR</div>
      <div className="google-sign-in">
        <div id="google-sign-in-button"></div>
      </div>
      <div className="sign-up-prompt">
        <p>Don't have an account? <button onClick={handleSignUpRedirect}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default SignIn;