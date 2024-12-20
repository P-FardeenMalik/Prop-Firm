const axios = require('axios');

const verifyUserIdentity = async (userData) => {
    try {
        const response = await axios.post('https://identity-verification-service.com/api/verify', userData);
        return response.data;
    } catch (error) {
        console.error('Error verifying user identity:', error);
        throw new Error('Verification failed');
    }
};

module.exports = {
    verifyUserIdentity,
};