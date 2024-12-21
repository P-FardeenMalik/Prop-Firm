import axios from 'axios';

const API_KEY = 'YOUR_TRUSTPILOT_API_KEY'; // Replace with your Trustpilot API key
const BASE_URL = 'https://api.trustpilot.com/v1';

export const getTrustpilotReviews = async (businessUnitId) => {
  try {
    const response = await axios.get(`${BASE_URL}/business-units/${businessUnitId}/reviews`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Trustpilot reviews:', error);
    return null;
  }
};