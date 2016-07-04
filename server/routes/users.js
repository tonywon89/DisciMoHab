var express = require('express');
var router = express.Router();
var UsersController = require("../controllers/users_controller.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', UsersController.createUser);

module.exports = router;
