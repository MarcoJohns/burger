var express = require("express");
var burgerModel = require("../models/burger.js");
var router = express.Router();
// Import the model (burger.js) to use its database functions.


router.get('/', function (req, res) {
    burgerModel.getAllBurgers(function(data){
        
        var burgerObj = {
            burgers: data
        }
        res.render('index', burgerObj)
    })
})

router.post('/api/burger', function (req, res) {
    console.log(req.body);
    var feData = req.body;
    burgerModel.postBurger(feData, function (data){
        console.log(data, 'this is databse insert');
        res.send("row added to db")

        res.end()
    })
})
router.put('/api/burger/:id', function (req, res) {
    var id = req.params.id;
    burgerModel.putBurger(id, function(){

        res.end('')
    })
})
router.delete('/api/burger/:id', function (req, res) {
    res.send('')
})



module.exports = router;
