var client = require('./init.js');

function getNotifications (id, callback) {

    var notificationID = "notifications:" + id;

    client.smembersAsync(notificationID)
        .then((response) => {

            return response.map((value) => {

                return JSON.parse(value);
            });
        })
        .then((parsedArray) => {

            return callback(null, parsedArray);
        })
        .catch((error) => {

            return callback(error);
        });
}

module.exports = getNotifications;
