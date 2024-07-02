const axios = require("axios");

const apiKey = 'AIzaSyC7sEQLuAlk3tHkiAyPbrHAfq5QRycH8Ww';

const getCinemas = async (location, radius) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=movie_theater&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching cinemas:", error);
        return [];
    }
};

module.exports = getCinemas;