'use strict';

module.exports = {

  up(db, next) {
    // TODO write your migration here
      db.collection('attendances').insert({username:"userone",month:2,year:2010,presentDates:[1,4,23,2,3],absentDates:[5,8,9]});
      next();
  },

  down(db, next) {
    // TODO write the statements to rollback your migration (if possible)
      db.attendance.remove({username:"userone",month:2,year:2010});
    next();
  }

};