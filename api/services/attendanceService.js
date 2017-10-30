'use strict';
var mongoose = require('mongoose'),
    attendance = mongoose.model('attendances'),
    holiday = mongoose.model('holiday');
exports.get_attendance = function (username, month, year) {
    return new Promise(function (resolve, reject) {
        attendance.aggregate([
            {
                $match: {
                    username: username,
                    month: month,
                    year: year
                },
            },
            {
                $lookup: {
                    from: "holiday",
                    localField: "year",
                    foreignField: "year",
                    as: "holidays"
                }
            },
            {
                $lookup: {
                    from: "holiday",
                    localField: "month",
                    foreignField: "month",
                    as: "holidays"
                }
            },
            {
                $project: {
                    "_id": 1,
                    "username": 1,
                    "month": 1,
                    "year": 1,
                    "presentDates": 1,
                    "absentDates": 1,
                    "holidays.name": 1,
                    "holidays.day": 1
                }
            }
        ], function (err, attendance) {
            if(err) reject(err);
            else resolve({ attendance: attendance });
        });
    });
};

exports.get_attendance_by_year = function (username,year) {
    return new Promise(function (resolve, reject) {
        attendance.aggregate(
            [
                {
                    $match: {
                        username: username,
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
            if(err) reject(err);
            else resolve({ totalDays: totalDays });
        });
    });
};