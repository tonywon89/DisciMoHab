var bcrypt = require("bcrypt");
var User = require("../models/user.js");
const saltRounds = 10;

var UsersController = {
  createUser: function (req, res, next) {
    // bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    //   User.registerUser(req.body.username, hash, function () {
    //     res.redirect("/");
    //   });
    // });
    res.send(`A user has been created ${req.body.username} ${req.body.password}`);
  }
};

module.exports = UsersController;
