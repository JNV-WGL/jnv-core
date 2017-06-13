'use strict';

module.exports = {

  up(db, next) {
      db.createCollection('users');
    next();
  },

  down(db, next) {
    // TODO write the statements to rollback your migration (if possible)
      db.users.drop();
    next();
  }

};