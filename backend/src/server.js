const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fardeenmalik138@gmail.com', // Replace with your Gmail address
    pass: 'rnyi oapz qonr opeq', // Replace with your application-specific password
  },
});

const app = express();
app.use(express.json());
app.use(cors());

const otpStore = {};

app.post('/send-verification-email', async (req, res) => {
  const { email } = req.body;

  try {
    // Generate a mock OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Sending OTP ${otp} to ${email}`);
    
    const mailOptions = {
      from: 'fardeenmalik138@gmail.com', // Replace with your Gmail address
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
      html: `<strong>Your OTP code is ${otp}</strong>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Store the OTP in memory for verification (for demonstration purposes)
    // In a real application, you should use a database
    otpStore[email] = otp;

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send verification email:', error);
    res.status(500).json({ success: false });
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});