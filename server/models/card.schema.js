var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    type: {type: String, required: true},
    value: {type: Number}
});

module.exports = mongoose.model('Card', cardSchema);