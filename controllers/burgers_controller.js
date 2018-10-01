var express = require("express");

var router = express.Router();

var burger = require("../models/burger")


router.get("/", function(req, res) {
    burger.seeAll(function(data) {
      console.log(data)
      return res.render("index", {burgers: data});
    });
  }); 

  router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    
    burger.updateOne(condition, function(result){
      return res.json(result);
    })
  });

  router.post("/api/burgers", function(req, res){
    console.log(req.body.name);

    burger.createOne(req.body.name, function(result){
      return res.json(result);
    })
  })
  // router.get("/*", function(req, res) {
  //   burger.seeAll(function(data) {
  //     console.log(data)
  //     return res.render("index", {burgers: data});
  //   });
  // }); 
module.exports = router;