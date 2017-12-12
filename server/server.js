var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection');
var units = require('./routes/units.route.js');

var app = express();

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// database connection
mongooseConnection.connect();

app.use('/units', units);

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('listening on port', port);  
});