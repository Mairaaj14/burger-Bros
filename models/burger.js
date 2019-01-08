// import orm.js file 
var orm = require("../config/orm.js");

// create code that will call the ORM functions using burger specific input for the ORM

var burger = {
    // selectAll
    all: function (cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    // add arrays cols and vals
    create: function (cols, vals, cb) {
        orm.create("burger", cols, vals, function(res) {
            cb(res);
        });
    },
    // update
    update: function (objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function(res) {
            cb(res);
        });
    },
    //delete
    delete: function (condition, cb) {
        orm.delete("burger", condition, function(res) {
            orm.delete("burger")
        });
    }
};


// export module
module.exports = burger;
