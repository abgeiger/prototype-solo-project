var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create new schema
// this will enforce our obect properties
var unitSchema = new Schema({
    type: {type: String, required: true},
    soldiers: {type: Number, required: true},
    powerPerSoldier: {type: Number, required: true},
    commander: {type: String, default: 'General'}
});

module.exports = mongoose.model('Unit', unitSchema);