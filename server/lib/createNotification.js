var getUser = require('../db/getUser.js');

function createNotification (eventID, eventInfo, callback) {

    console.log(eventInfo, "THIS IS THE EVENT INFO");
    getUser(eventInfo.hostID, (error, hostInfo) => {
        var fullName = hostInfo.firstName + " " + hostInfo.lastName;

        var notification = {
            eventID: eventID,
            timestamp: Date.now(),
            hostName: fullName,
            hostPhotoURL: hostInfo.photoURL,
            eventWhat: eventInfo.eventWhat,
            eventWhere: eventInfo.eventWhere,
            eventWhen: eventInfo.eventWhen,
            isPoll: eventInfo.isPoll
        };

        return callback (error, notification);
    });
}

module.exports = createNotification;
