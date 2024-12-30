const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sendOtpEmail } = require('./services/emailService'); // Import the email service
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = {}; // In-memory store for user credentials
const otpStore = {}; // In-memory store for OTPs

app.post('/send-verification-email', async (req, res) => {
  const { email } = req.body;
  if (users[email]) {
    console.log(`User already exists: ${email}`); // Log if user already exists
    return res.status(400).json({ success: false, message: 'User already exists' });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;
  console.log(`OTP for ${email}: ${otp}`); // Log the OTP

  try {
    await sendOtpEmail(email, otp); // Send the OTP email
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
});

app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

app.post('/sign-up', (req, res) => {
  const { email, password } = req.body;
  console.log(`Received sign-up request for email: ${email}`); // Log the request
  if (users[email]) {
    console.log(`User already exists: ${email}`); // Log if user already exists
    return res.status(400).json({ success: false, message: 'User already exists' });
  }
  users[email] = { password };
  console.log(`User created: ${email}`); // Log user creation
  res.status(200).json({ success: true });
});

app.post('/sign-in', (req, res) => {
  const { email, password } = req.body;
  const user = users[email];
  if (user && user.password === password) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'Invalid email or password' });
  }
});

app.post('/sign-in-google', (req, res) => {
  const { email } = req.body;
  const user = users[email];
  if (user) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'Account not found. Please sign up.' });
  }
});

app.post('/check-email', (req, res) => {
  const { email } = req.body;
  if (users[email]) {
    return res.status(200).json({ exists: true });
  } else {
    return res.status(200).json({ exists: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});