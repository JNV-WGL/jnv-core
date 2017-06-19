'use strict';


var mongoose = require('mongoose'), attendance = mongoose.model('attendances');

exports.get_attendance = function(req, res) {
    var yearMonth = req.params.mmyyyy;
    var year=Number(yearMonth.slice(-4));
    var month=Number(yearMonth.slice(0,2));
    attendance.find({username:req.params.username,month:month,year:year}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};