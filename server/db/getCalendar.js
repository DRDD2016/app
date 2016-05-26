var client = require('./init.js');

function getCalendar (userID, callback) {

    var listName = "calendar:" + userID;

    client.lrangeAsync(listName, 0, -1)
        .then((calendar) => {
            callback(null, calendar);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getCalendar;
