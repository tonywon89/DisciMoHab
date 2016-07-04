var promise = require('bluebird');

var options = {
  promiseLib: promise
}

var pgp = require('pg-promise')(options);
var connectionString = require("../../config.js");
var db = pgp(connectionString);

module.exports.findByUsername = function (username, callback) {
  db.one('select * from users where username = $1', username)
  .then(function(data) {
    callback(null, data);
  })
  .catch(function (err) {
    return callback(err, null);
  });
};
