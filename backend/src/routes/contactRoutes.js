const express = require('express');
const { sendEmail } = require('../services/emailService');

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendEmail(name, email, message);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;