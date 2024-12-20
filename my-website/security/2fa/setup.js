const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

// Function to set up 2FA for a user
const setupTwoFactorAuth = (user) => {
    // Generate a secret for the user
    const secret = speakeasy.generateSecret({ length: 20 });
    
    // Generate a QR code for the user to scan
    const otpauth = secret.otpauth_url;
    qrcode.toDataURL(otpauth, (err, dataUrl) => {
        if (err) {
            console.error('Error generating QR code:', err);
            return;
        }
        
        // Save the secret to the user's profile in the database
        user.twoFactorSecret = secret.base32;
        user.save((saveErr) => {
            if (saveErr) {
                console.error('Error saving user secret:', saveErr);
                return;
            }
            
            // Return the QR code data URL for the frontend
            console.log('QR Code generated:', dataUrl);
        });
    });
};

module.exports = setupTwoFactorAuth;