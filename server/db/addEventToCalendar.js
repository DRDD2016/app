var client = require('./init.js');

function addEventToCalendar (users, eventID, callback) {

    if (!Array.isArray(users)) {

        throw new Error("addEventToCalendar: first argument must be an array");
    }

    users.forEach((id, index) => {

        var setKey = "calendar:" + id;

        client.saddAsync(setKey, eventID)

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

module.exports = addEventToCalendar;
