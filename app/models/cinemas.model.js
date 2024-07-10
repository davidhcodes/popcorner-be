const axios = require("axios");

const apiKey = "AIzaSyC7sEQLuAlk3tHkiAyPbrHAfq5QRycH8Ww";

exports.fetchCinemas = (location, radius) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=movie_theater&key=${apiKey}`;
  return axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      return response.data.results;
    })
    .catch((error) => {
      console.error("Error fetching cinemas:", error);
      return [];
    });
};
