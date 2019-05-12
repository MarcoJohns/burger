var orm = require("../config/orm.js");

var burger = {
    getAllBurgers: function (cb) {
        orm.selectAll('burgers',cb)
    },
    postBurger: function(feData, cb){
        orm.insertInto('burgers', 'burger_name', feData, cb)
    },
    putBurger: function(id, cb){
        orm.updateRow('burgers', id, cb)
    },
    deleteBurger: function(id, cb){
        orm.deleteRow('burgers', id, cb)
    }
}

// Also inside`burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

module.exports = burger;