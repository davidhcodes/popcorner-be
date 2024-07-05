const { fetchLocations } = require("../models/geocode.model");

exports.getLocations = (req, res) => {
    const { address } = req.params;
    fetchLocations(address).then((results) => {
        res.status(200).send(results);
    });
}