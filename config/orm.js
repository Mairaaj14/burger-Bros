// Import mysql connection

var connection = require("../config/connection.js");

// Methods

var orm = {
    // method to select all burgers from our database
    selectAll: function (input, cb) {
        var queryString = 'SELECT * FROM ${input};';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // method to insert one burger to database

    insertOne: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});';
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // method to update one burger in database

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ${table} SET ${objtoSql(objColVals)} WHERE ${condition}';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // method to delete a burger from database

    deleteOne: function(table, condition, cb) {
        var queryString = 'DELETE FROM ${table} WHERE ${condition}';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }

}
// export ORM object for the model
module.exports = orm;