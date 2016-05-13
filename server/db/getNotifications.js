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

            return parsedArray.sort((a, b) => {
                return b.timestamp - a.timestamp;
            });


        })
        .then((sortedArray) => {
            return callback(null, sortedArray);

        })
        .catch((error) => {

            return callback(error);
        });
}

module.exports = getNotifications;
