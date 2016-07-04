var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = require("../../config.js");
var db = pgp(connectionString);

module.exports.findByUsername = function (username, callback) {
  console.log(username);
  db.one('select * from users where username = $1', username)
  .then(function(data) {
    callback(null, data);
  })
  .catch(function (err) {
    return callback(err, null);
  });
};

module.exports.findById = function(id, callback) {
  db.one('select * from users where id = $1', id)
    .then(function(data) {
      callback(null, data);
    })
    .catch(function (err) {
      return callback(err, null);
    });
};

module.exports.registerUser = function (username, passwordDigest, callback) {
  db.oneOrNone('insert into users (username, password_digest) values (${username}, ${password})', {username: username, password: passwordDigest} )
    .then(function() {
      callback();
    })
    .catch(function (err) {
      console.log(err);
      return callback(err);
    });
};
