'use strict';
module.exports = function(app) {
  var userList = require('../controllers/loginController');
  var attendance = require('../controllers/attendanceController');


  // todoList Routes
  app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user);


  app.route('/users/:userId')
    .get(userList.get_user_details)
    .put(userList.update_user_details)
    .delete(userList.delete_a_user);

  app.route('/login')
      .post(userList.login);
  app.route('/signup')
      .post(userList.create_a_user);

  app.route('/:username/attendance/:mmyyyy')
      .get(attendance.get_attendance);
  app.route('/:username/attendance_by_year/:year')
      .get(attendance.get_attendance_by_year);
};