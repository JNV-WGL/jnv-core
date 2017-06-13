'use strict';
module.exports = function(app) {
  var userList = require('../controllers/loginController');


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
};