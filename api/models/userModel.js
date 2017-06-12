'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    Required: 'Kindly enter the UserName'
  },
    rollno: {
        type: String,
        Required: 'Kindly enter the RollNo'
    },
    name: {
        type: String,
        Required:'Kindly enter the Name'
    },
    dob: {
        type: String

    },
    class:{
      type:String
    },
    password: {
        type: String,
        Required: 'Kindly enter the password'
  }
});

module.exports = mongoose.model('Users', UserSchema);