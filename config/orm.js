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
    }
    // insertOne: function(){

    // }
    // updateOne: function(){

    // };
}

module.exports = orm;