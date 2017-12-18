var express = require('express');
var router = express.Router();
var Regiment = require('../models/regiment.schema.js');

// post new regiment
router.post('/', function(req, res){
    var addRegiment = new Regiment(req.body);
    addRegiment.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/', function(req, res){
    Regiment.find({}, function(err, regiment){
        if(err) {
            res.sendStatus(500);
        } else {
            res.send(regiment);
        }
    });
});

router.get('/leftFlankSelf', function(req, res){
    Regiment.find({"flank": "left", "commander": "General"}, function(err, regiment){
        if(err) {
            res.sendStatus(500);
        } else {
            res.send(regiment);
        }
    });
});

module.exports = router;