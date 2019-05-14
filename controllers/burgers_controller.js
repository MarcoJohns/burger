var express = require("express");
var burgerModel = require("../models/burger.js");
var router = express.Router();
// Import the model (burger.js) to use its database functions.


router.get('/', function (req, res) {
    burgerModel.getAllBurgers(function (data) {

        var burgerObj = {
            burgers: data
        }
        res.render('index', burgerObj)
    })
})

router.post('/api/burger', function (req, res) {
    console.log("this is the body", req.body);
    var feData = req.body;
    console.log(feData);
    burgerModel.postBurger(feData, function (data) {
        console.log(data, 'this is databse insert');
        res.send("/")
    })
})
router.put('/api/burger/:id', function (req, res) {
    var id = req.params.id;
    burgerModel.putBurger(id, function (data) {
        console.log(data, "row updated");
        res.send('update happened on ' + id)
    })
})
router.delete('/api/burger/:id', function (req, res) {
    var id = req.params.id
    console.log(id);
    burgerModel.deleteBurger(id, function (data) {
        console.log(data);

        res.send('row deleted')
    })
})



module.exports = router;
