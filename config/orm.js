var connection = require("../config/connection");

var orm = {
    seeAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    updateOne: function(table, col, condition, cb){
        var queryString = "UPDATE " + table + " SET " + col + " WHERE " + condition;
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        }) 
    },
    createOne: function(table, col, name, cb){
        var queryString = "INSERT INTO " + table;

       queryString += " (";
       queryString += col;
       queryString += ") ";
       queryString += 'VALUES ("';
       queryString += name;
       queryString += '") ';

       console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err){
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;
