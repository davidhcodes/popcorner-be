const { fetchCinemas } = require("../models/cinemas.model");

const getCinemas = (req, res) => {
    const { location, radius } = req.body;
    fetchCinemas(location, radius).then((cinemas) => {
        res.status(200).send(cinemas);
    });
};

module.exports = { getCinemas }