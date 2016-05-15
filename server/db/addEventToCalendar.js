var client = require('./init.js');

function addEventToCalendar (users, eventID, callback) {

    if (!Array.isArray(users)) {

        throw new Error("addEventToCalendar: first argument must be an array");
    }
    console.log("here");
    users.forEach((id, index) => {

        var setName = "calendar:" + id;

        client.saddAsync(setName, eventID)

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
