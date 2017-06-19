'use strict';

module.exports = {

  up(db, next) {
    // TODO write your migration here
      db.createCollection('attendances');

      next();
  },

  down(db, next) {
    db.attendances.drop();
    // TODO write the statements to rollback your migration (if possible)
    next();
  }

};