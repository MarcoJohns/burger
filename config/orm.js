var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, [table], function(err, data){
            if(err) {
                throw err;
            }
            cb(data)
        })
    },
    insertInto: function(table, col, feData, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"

        connection.query(queryString, [table, col, feData.burger ], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data)
        })
    },
    updateRow: function(id, cb){

    }
}

module.exports = orm;