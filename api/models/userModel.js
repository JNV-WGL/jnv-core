'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    Required: 'Kindly enter the username'
  },
    password: {
        type: String,
        Required: 'Kindly enter the username'
  }
});

module.exports = mongoose.model('Users', UserSchema);