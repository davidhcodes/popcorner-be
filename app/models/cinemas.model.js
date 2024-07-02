const axios = require("axios");

const apiKey = 'AIzaSyC7sEQLuAlk3tHkiAyPbrHAfq5QRycH8Ww';

exports.fetchCinemas = (location, radius) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=movie_theater&key=${apiKey}`;
    return axios.get(url)
        .then((response) => {
            return response.data.results;
        })
        .catch((error) => {
            console.error("Error fetching cinemas:", error);
            return [];
        });
};