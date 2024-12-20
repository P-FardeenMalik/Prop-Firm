const axios = require('axios');

const COINAPI_BASE_URL = 'https://rest.coinapi.io/v1';
const API_KEY = process.env.COINAPI_KEY; // Ensure to set your CoinAPI key in the .env file

const coinAPI = axios.create({
    baseURL: COINAPI_BASE_URL,
    headers: {
        'X-CoinAPI-Key': API_KEY,
    },
});

const getAssets = async () => {
    try {
        const response = await coinAPI.get('/assets');
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching assets: ${error.message}`);
    }
};

const getAssetDetails = async (assetId) => {
    try {
        const response = await coinAPI.get(`/assets/${assetId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching asset details: ${error.message}`);
    }
};

module.exports = {
    getAssets,
    getAssetDetails,
};