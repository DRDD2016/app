var client = require('./init.js');

function deleteEventFromCalendar (users, eventID, callback) {

    if (!Array.isArray(users)) {

        throw new Error("deleteEventFromCalendar: first argument must be an array");
    }

    users.forEach((id, index) => {
        var setName = "calendar:" + id;

        client.sremAsync(setName, eventID)

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

module.exports = deleteEventFromCalendar;
