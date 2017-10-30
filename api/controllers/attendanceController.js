'use strict';
var attendanceService = require('../services/attendanceService');


exports.get_attendance = function (req, res) {
    if (req.session.user) {
        var yearMonth = req.params.mmyyyy;
        var year = Number(yearMonth.slice(-4));
        var month = Number(yearMonth.slice(0, 2));
        attendanceService.get_attendance(req.params.username,month,year).then(function (data) {
            res.json(data.attendance);
        }).catch(function (err) {
            res.send(err);
        });
    }
    else {
        res.status(401).send();
    }
};
exports.get_attendance_by_year = function (req, res) {
    if (req.session.user) {
        var year = Number(req.params.year);
        attendanceService.get_attendance_by_year(req.params.username,year).then(function (data) {
            res.json(data.totalDays);
        }).catch(function (err) {
            res.send(err);
        });
    }
    else {
        res.status(401).send();
    }
};