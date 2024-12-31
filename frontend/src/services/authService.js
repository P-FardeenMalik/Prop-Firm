const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const sendVerificationEmail = async (email) => {
  try {
    const response = await fetch(`${BACKEND_URL}/send-verification-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to send verification email:', error);
    return { success: false };
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await fetch(`${BACKEND_URL}/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Failed to verify OTP:', error);
    return false;
  }
};

export const createAccount = async (email, password) => {
  try {
    const response = await fetch(`${BACKEND_URL}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to create account:', error);
    return { success: false };
  }
};

export const checkEmail = async (email) => {
  try {
    const response = await fetch(`${BACKEND_URL}/check-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to check email:', error);
    return { exists: false };
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const response = await fetch(`${BACKEND_URL}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to sign in:', error);
    return { success: false, message: 'Failed to sign in' };
  }
};

export const signInWithGoogle = async (email) => {
  try {
    const response = await fetch(`${BACKEND_URL}/sign-in-google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to sign in with Google:', error);
    return { success: false, message: 'Failed to sign in with Google' };
  }
};

export const sendPasswordResetEmail = async (email) => {
  try {
    const response = await fetch(`${BACKEND_URL}/send-password-reset-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    return { success: false };
  }};