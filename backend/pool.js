var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 100,
  port: "8889",
  host: "localhost",
  user: "root",
  password: "root",
  database: "homeawaydb"
});

module.exports = pool;
