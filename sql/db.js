var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '3306',
  password : 'obcc-40b',
  database : 'competencias',
  connectTimeout: 20000,
  insecureAuth: true,
  debug: true
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection