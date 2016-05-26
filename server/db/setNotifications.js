var client = require('./init.js');

function setNotifications (recipients, subjectID, notification, callback) {

    if (!Array.isArray(recipients)) {

        callback(new Error("setNotifications: first argument must be an array"));
    }
    if (!subjectID) {

        callback(new Error('setNotifications: subjectID is missing'));
    }

    recipients.forEach((recipientID, index) => {

        // identify the person at whom this notification is aimed
        notification.subjectID = subjectID;
        var listName = "notifications:" + recipientID;

        client.lpushAsync(listName, JSON.stringify(notification))

        .then((response) => {

            if (index === recipients.length - 1) {

                return callback(null, response);
            }
        })
        .catch((error) => {
            console.error(error);
            return callback(error);
        });
    });
}

module.exports = setNotifications;
