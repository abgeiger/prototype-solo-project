var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: {type: String, required: true},
    message: {type: String, required: true}
});

module.exports = mongoose.model('Event', eventSchema);