var client = require('./init.js');

function getNotifications(id, callback) {

    var notificationID = "notifications:" + id;

    client.smembersAsync(notificationID)
        .then((response) => {
            console.log(typeof response);

            return response.map((value) => {

                return JSON.parse(value);
            });
        })
        .then((parsedArray) => {
        
            return callback(null, parsedArray);
        })
        .catch((error) => {
            console.log(error);
            return callback(error);
        });
}

module.exports = getNotifications;