var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var decisionSchema = new Schema({
    type: {type: String, required: true},
    value: {type: Number}
});

module.exports = mongoose.model('Decision', decisionSchema);