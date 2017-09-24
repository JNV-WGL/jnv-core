'use strict';

var mongoose = require('mongoose'), attendance = mongoose.model('attendances');
var holiday = mongoose.model('holiday');

exports.get_attendance = function (req, res) {
    if (req.session.user) {
        var yearMonth = req.params.mmyyyy;
        var year = Number(yearMonth.slice(-4));
        var month = Number(yearMonth.slice(0, 2));
        attendance.aggregate([
            {
                $match: {
                    username: req.params.username,
                    month: month,
                    year: year
                },
            },
            {
                $lookup: {
                    from : "holiday",
                    localField: "year",
                    foreignField: "year",
                    as: "holidays"
                }
            },
            {
                $lookup: {
                    from : "holiday",
                    localField: "month",
                    foreignField: "month",
                    as: "holidays"
                }
            },
            {
                $project:{
                    "_id": 1,"username": 1,"month": 1,"year": 1,"presentDates": 1, "absentDates": 1, "holidays.name": 1, "holidays.day": 1
                }
            }
            ], function (err, attendanceData) {
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
        attendance.aggregate(
    [
        {
            $match: {
                username: req.params.username,
                year: year
            },
        },
        {
            $lookup: {
            from : "holiday",
                localField: "year",
                foreignField: "year",
                as: "holidays"
            }
        },
        {   $project: {present: {$size: "$presentDates"}, absent: {$size: "$absentDates"},holidays:{$size:"$holidays"} }
        },
        {
            $group: {
                _id: null,
                totalPresentDaysInYear: {$sum: "$present"},
                totalAbsentDaysInYear: {$sum: "$absent"},
                holidaysInYear: {$sum: "$holidays"}
            }
        }
    ], function (err, totalDays) {
            if (err)
                res.send(err);
            res.json(totalDays);
        });
    }
    else {
        res.status(401).send();
    }
};