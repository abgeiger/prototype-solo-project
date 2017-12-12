var express = require('express');
var router = express.Router();
var Unit = require('../models/unit.schema.js');

// post new unit
router.post('/', function(req, res){
    var addUnit = new Unit(req.body);
    addUnit.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;