var client = require('./init.js');

function setNotifications (user, notification, callback) {

    if (!Array.isArray(user)) {

        throw new Error("setNotifications: first argument must be an array");
    }

    user.forEach((id, index) => {

        var setName = "notifications:" + id;
        
        client.saddAsync(setName, JSON.stringify(notification))

        .then((response) => {
            if (index === user.length - 1) {
                return callback(null, response);
            }
        })
        .catch((error) => {
            return callback(error);
        });
    });
}

module.exports = setNotifications;
