const { getAllUsers, fetchUserName, fetchCommunities } = require("../models/user.model");



exports.getUsers = (req, res) => {
  getAllUsers().then((users) => {
    res.status(200).json(users);
  });
};

exports.getUserName = (req, res) => {
  fetchUserName(req.params.username)
  .then((user) => {
    res.status(200).json({ user })
  })
}
exports.getCommunities = (req, res) => {
  fetchCommunities(req.params.communities).then((communities) => {
    res.status(200).json(communities)
  })
}

