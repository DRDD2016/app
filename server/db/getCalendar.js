var client = require('./init.js');

function getCalendar (userID, callback) {

    var setName = "calendar:" + userID;

    client.smembersAsync(setName)
        .then((calendar) => {
            callback(null, calendar);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getCalendar;
