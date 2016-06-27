var pg = require('pg');
var path = require('path');

var connectionString = require(path.join(__dirname, '../', 'config'));

var client = new pg.Client(connectionString);
client.connect();
