var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection');
var units = require('./routes/units.route.js');
var regiment = require('./routes/regiment.route.js');
var battle = require('./routes/battle.route.js');

var app = express();

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// database connection
mongooseConnection.connect();

app.use('/units', units);
app.use('/regiment', regiment);
app.use('/battle', battle);

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('listening on port', port);  
});