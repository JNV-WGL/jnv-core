'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);


var HolidaySchema = new Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    },
    month : {
        type: Number
    },
    day : {
        type: Number
    }
});

module.exports = mongoose.model('holiday', HolidaySchema);

