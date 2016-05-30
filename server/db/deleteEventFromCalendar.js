var client = require('./init.js');

function deleteEventFromCalendar (eventID, userID, callback) {

    var setName = "calendar:" + userID;

    client.sremAsync(setName, eventID)

    .then((response) => {
        return callback(null, response);
    })
    .catch((error) => {
        return callback(error);
    });

}

module.exports = deleteEventFromCalendar;
