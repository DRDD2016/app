var getUser = require('../db/getUser.js');

function createNotification (subjectID, eventID, eventInfo, callback) {
    console.log(subjectID, "in Create Notification ");
    getUser(subjectID, (error, userInfo) => {

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
            hostID: eventInfo.hostID,
            subjectID: undefined,
            viewed: false,
            inviteesNumber: eventInfo.invitees.length,
            eventName: eventInfo.eventName,
            hasEdited: eventInfo.hasEdited

        };

        return callback(error, notification);
    });
}

module.exports = createNotification;
