const { fetchCinemas } = require("../models/cinemas.model");

const getCinemas = (req, res) => {
    const { location } = req.params;
    const radius = 1500;
    fetchCinemas(location, radius).then((cinemas) => {
        res.status(200).send(cinemas);
    });
};

module.exports = { getCinemas }