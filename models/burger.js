var orm = require("../config/orm");

var burger = {
    seeAll: function(cb){
        orm.seeAll("burgers", function(res){
           cb(res); 
        });
    },
    updateOne: function(condition, cb){
        orm.updateOne("burgers", "devoured = true", condition, function(res){
            cb(res);
        });
    },
    createOne: function(name, cb){
        orm.createOne("burgers", "name", name, function(res){
            cb(res);
        });
    }

}

module.exports = burger;