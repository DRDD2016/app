var createNotification = require('./createNotification.js');
var setNotifications = require('../db/setNotifications.js');
var addEventToCalendar = require('../db/addEventToCalendar.js');

function notifyEveryone (recipients, subjectID, eventID, event, callback) {

    createNotification(subjectID, eventID, event, (error, notification) => {

        if (error) {
            return callback(error);
        }

        setNotifications(recipients, subjectID, notification, (error, response) => {

            if (error) {
                return callback(error);
            }
            if (!event.isPoll) {

                addEventToCalendar(recipients, eventID, (error, response) => {

                    return callback(error, response);
                });
            } else {
                callback(null, true);
            }
        });
    });
}

module.exports = notifyEveryone;
