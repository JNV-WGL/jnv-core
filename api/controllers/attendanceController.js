'use strict';

var mongoose = require('mongoose'), attendance = mongoose.model('attendances');

exports.get_attendance = function (req, res) {
    if (req.session.user) {
        var yearMonth = req.params.mmyyyy;
        var year = Number(yearMonth.slice(-4));
        var month = Number(yearMonth.slice(0, 2));
        attendance.find({username: req.params.username, month: month, year: year}, function (err, attendanceData) {
            if (err)
                res.send(err);
            res.json(attendanceData);
        });
    }
    else {
        res.status(401).send();
    }
};
exports.get_attendance_by_year = function (req, res) {
    if (req.session.user) {
        var year = Number(req.params.year);
        attendance.aggregate([{
            $match: {
                username: req.params.username,
                year: year
            }
        }, {$project: {present: {$size: "$presentDates"}, absent: {$size: "$absentDates"}}}, {
            $group: {
                _id: null,
                totalPresentDaysInYear: {$sum: "$present"},
                totalAbsentDaysInYear: {$sum: "$absent"}
            }
        }], function (err, totalDays) {
            if (err)
                res.send(err);
            res.json(totalDays);
        });
    }
    else {
        res.status(401).send();
    }
};