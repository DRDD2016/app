var client = require('./init.js');

function setNotifications (users, notification, callback) {

    if (!Array.isArray(users)) {

        throw new Error("setNotifications: first argument must be an array");
    }

    users.forEach((id, index) => {
        notification.subjectID = id;
        var setName = "notifications:" + id;

        client.saddAsync(setName, JSON.stringify(notification))

        .then((response) => {
            if (index === users.length - 1) {
                return callback(null, response);
            }
        })
        .catch((error) => {
            return callback(error);
        });
    });
}

module.exports = setNotifications;
