var createNotification = require('./createNotification.js');
var setNotifications = require('../db/setNotifications.js');
var addEventToCalendar = require('../db/addEventToCalendar.js');

function notifyEveryone (hostID, eventID, event, callback) {

    createNotification(hostID, eventID, event, (error, notification) => {

        if (error) {
            return callback(error);
        }
        var userIDs = event.invitees.map((inviteeObj) => {

            return inviteeObj.id;
        }).concat([event.hostID]);

        setNotifications(userIDs, notification, (error, response) => {

            if (error) {
                return callback(error);
            }
            if (!event.isPoll) {

                addEventToCalendar(userIDs, eventID, (error, response) => {
                    
                    return callback(error, response);
                });
            } else {
                callback(null, true);
            }
        });
    });
}

module.exports = notifyEveryone;
