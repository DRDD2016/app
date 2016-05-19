var getUser = require('../db/getUser.js');

function createNotification (userID, eventID, eventInfo, callback) {

    getUser(userID, (error, userInfo) => {

        if (error) {
            return callback(new Error('Problem fetching user to create notification (1)'));
        }
        if (!userInfo) {
            return callback(new Error('Problem fetching user to create notification (2)'));
        }

        var notification = {
            eventID: eventID,
            timestamp: Date.now(),
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            photoURL: userInfo.photoURL,
            eventWhat: eventInfo.eventWhat,
            eventWhere: eventInfo.eventWhere,
            eventWhen: eventInfo.eventWhen,
            isPoll: eventInfo.isPoll,
            hostID: eventInfo.hostID
        };

        return callback(error, notification);
    });
}

module.exports = createNotification;
