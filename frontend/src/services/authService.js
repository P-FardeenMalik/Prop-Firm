export const sendVerificationEmail = async (email) => {
    try {
      const response = await fetch('http://localhost:5000/send-verification-email', {
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
      const response = await fetch('http://localhost:5000/verify-otp', {
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
    // Simulate account creation
    console.log(`Creating account for ${email}`);
    return { success: true }; // Mock account creation
  };