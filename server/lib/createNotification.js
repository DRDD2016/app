var getUser = require('../db/getUser.js');

function createNotification (eventID, eventInfo, callback) {
    getUser(eventInfo.hostID, (error, hostInfo) => {
        var fullName = hostInfo.firstName + " " + hostInfo.lastName;

        var notification = {
            eventID: eventID,
            timestamp: Date.now(),
            hostName: fullName,
            hostPhotoURL: hostInfo.photoURL
        };
        // check if any of the event where/what/when are confirmed, if so then return in the if isPoll section
        if (eventInfo.isPoll) {

            notification.isPoll = true;
        } else {
            notification.isPoll = false;
            notification.eventWhat = eventInfo.eventWhat;
            notification.eventWhere = eventInfo.eventWhere;
            notification.eventWhen = eventInfo.eventWhen;
        }
        return callback (error, notification);
    });
}

module.exports = createNotification;
