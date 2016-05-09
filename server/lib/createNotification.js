var getUser = require('../db/getUser.js');

function createNotification (userID, eventID, eventInfo, callback) {

    getUser(userID, (error, userInfo) => {
        console.log(userID);
        if (error) {
            callback(new Error('problem fetching user to create notification'));
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

        return callback (error, notification);
    });
}

module.exports = createNotification;
