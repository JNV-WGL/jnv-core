'use strict';

module.exports = {

    up(db, next) {
        // TODO write your migration here
        db.collection('holiday').insert({name:"Dasara",year:2017,month:9,day:29});
        next();
    },

    down(db, next) {
        // TODO write the statements to rollback your migration (if possible)
        db.attendance.remove({name:"Dasara",year:2017,month:9,day:29});
        next();
    }

};