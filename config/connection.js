var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "t3hb7iyu94toqgmg",
  password: "h6mfv32bnic52r3b",
  database: "u3s8i6hpvmserwb0"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
