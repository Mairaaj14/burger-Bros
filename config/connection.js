// Require Mysql node module

var mysql = require("mysql");

// Create a local connection to burrgers_db
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
   
    user: "root",
    password: "password",
    database: "burger_db"
});
};

// Making the connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;
