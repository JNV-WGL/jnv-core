'use strict';

module.exports = {

    up(db, next) {
        // TODO write your migration here
        db.createCollection('holiday');

        next();
    },

    down(db, next) {
        db.holiday.drop();
        // TODO write the statements to rollback your migration (if possible)
        next();
    }
};