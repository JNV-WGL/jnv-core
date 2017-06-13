'use strict';

module.exports = {

  up(db, next) {
    db.collection('users').insert({username:"userone",rollno:'1234',name:'ram',dob:'23-01-2010',class:'4',password:'aaa'});
    next();
  },

  down(db, next) {
    // TODO write the statements to rollback your migration (if possible)
      db.users.remove({});
    next();
  }

};