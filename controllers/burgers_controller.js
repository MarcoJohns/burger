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

router.post('/burger', function (req, res) {
    res.send('')
})
router.put('/burger', function (req, res) {
    res.send('')
})
router.delete('/burger', function (req, res) {
    res.send('')
})



module.exports = router;
