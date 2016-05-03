var getUser = require('../db/getUser.js');

function createNotification (eventID, eventInfo, callback) {

    if (eventInfo.isPoll) {

        getUser(eventInfo.hostID, (error, hostInfo) => {

            var fullName = hostInfo.firstName + " " + hostInfo.lastName;

            var notification = {
                isPoll: true,
                eventID: eventID,
                timestamp: Date.now(),
                hostName: fullName,
                hostPhotoURL: hostInfo.photoURL
            };
            return callback (error, notification);
        });

    } else {

    }
}

module.exports = createNotification;
