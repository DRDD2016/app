var deleteEventFromCalendar = require('../db/deleteEventFromCalendar.js');

function deleteEventFromUserCalendars (users, eventID, callback) {

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

        deleteEventFromCalendar(eventID, userID, report);

    });
}

module.exports = deleteEventFromUserCalendars;
