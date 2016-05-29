var deleteEventFromUsersCalendar = require('../db/deleteEventFromUsersCalendar.js');

function deleteEventFromCalendar (users, eventID, callback) {

    if (!Array.isArray(users)) {

        throw new Error("deleteEventFromCalendar: first argument must be an array");
    }
    var progressCount = 0;

    function report (error, success) {

        if (error) {
            return callback(error);
        }
        progressCount++;

        if (progressCount === users.length) {
            return callback(null, true);
        }
    }

    users.forEach((userID, index) => {

        deleteEventFromUserCalendar(eventID, userID, report);

    });
}

module.exports = deleteEventFromCalendar;
