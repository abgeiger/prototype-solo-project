var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    name: {type: String, required: true},
    text: {type: String, required: true},
    decisions: {type: Array}
});

module.exports = mongoose.model('Message', messageSchema);