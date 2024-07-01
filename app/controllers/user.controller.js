const { getAllUsers, fetchUserName } = require("../models/user.model");


exports.getUsers = (req, res) => {
  getAllUsers().then((users) => {
    res.status(200).json(users);
  });
};

exports.getUserName = (req, res) => {
  fetchUserName(req.params.username)
  .then((user) => {
    res.status(200).send({ user })
  })
}
