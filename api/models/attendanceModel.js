'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);


var AttendanceSchema = new Schema({
    username: {
        type: String,
    },
    month: {
        type:Number,
    },
    year: {
        type:Number,
    },
    presentDates: {
        type:[Number],
    },
    absentDates: {
        type:[Number],
    }
});

module.exports = mongoose.model('attendances', AttendanceSchema);
