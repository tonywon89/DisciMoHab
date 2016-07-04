var express = require('express');
var router = express.Router();
var UsersController = require("../controllers/users_controller.js");
var passport = require("passport");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// TODO: Login the user after signing up
router.post('/register', UsersController.createUser);

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  UsersController.login
);

router.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

module.exports = router;
