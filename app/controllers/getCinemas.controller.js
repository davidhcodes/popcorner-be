const { fetchCinemas } = require("../models/cinemas.model");

const getCinemas = (req, res) => {
    const { lat, lng } = req.body;
    const radius = 1500;
    const location = `${lat},${lng}`;
    fetchCinemas(location, radius).then((cinemas) => {
        res.status(200).send(cinemas);
    });
};

module.exports = { getCinemas }