// import orm.js file 
var orm = require("../config/orm.js");

// create code that will call the ORM functions using burger specific input for the ORM

var burger = {
    // selectAll
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    // insertOne

    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    },

    // updateOne

    updateOne: function (objColValues, condition, id, cb) {
        orm.updateOne("burgers", objColValues, condition, id, function(res) {
            cb(res);
        });
    }

};
// export module
module.exports = burger;
