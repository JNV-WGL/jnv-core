'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');
exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.login = function (req, res) {
    User.findOne({username:req.body.username},function (err, user) {
        if (err)
            res.send(err);

        if( user && user.password ===req.body.password){
            req.session.user=user;
            res.json({ isAuthenticated: true,username:user.username });
            }
        else {
            res.json({ isAuthenticated: "false",username:"null" });
        }
    });


    };

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);

  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Congratulations!!! '+user.username+' your account successfully activated' });
  });
};


exports.get_user_details = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_user_details = function(req, res) {
  User.findOneAndUpdate(req.params.userId, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {


  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};


