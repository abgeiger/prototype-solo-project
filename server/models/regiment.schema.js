var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create new schema
// this will enforce our obect properties
var regimentSchema = new Schema({
    flank: {type: String, required: true},
    startingPower: {type: Number, required: true},
    currentPower: {type: Number, required: true},
    moraleRatio: {type: Number, required: true},
    morale: {type: Number, required: true},
    commander: {type: String, default: 'General'}
});

module.exports = mongoose.model('Regiment', regimentSchema);