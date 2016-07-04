var bcrypt = require("bcrypt");
var User = require("../models/user.js");
const saltRounds = 10;

var UsersController = {
  createUser: function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      User.registerUser(req.body.username, hash, function () {
        res.send("A user has successfully been created!");
      });
    });
  },

  login: function (req, res) {
    res.send("A USER HAS BEEN LOGGED IN!");
  }
};

module.exports = UsersController;
