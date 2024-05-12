const axios = require('axios');

const getLLMResponse = async (prompt) => {
    try {
        const response = await axios.post('LLM_API_ENDPOINT', { prompt });
        return response.data;
    } catch (error) {
        console.error('LLM API Error:', error);
        throw new Error('Failed to get response from LLM API');
    }
};

module.exports = getLLMResponse;
