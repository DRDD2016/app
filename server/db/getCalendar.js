var client = require('./init.js');

function getCalendar (userID, callback) {

    var setKey = "calendar:" + userID;
    
    client.smembersAsync(setKey)
        .then((calendar) => {
            callback(null, calendar);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getCalendar;
