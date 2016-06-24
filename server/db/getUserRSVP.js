var client = require('./init.js');

function getUserRSVP (eventID, userID, status, callback) {

    var setKey = 'RSVP:' + eventID + '|' + status;

    client.sismemberAsync(setKey, userID)
        .then((result) => {

            var response = result ? status : null;
            callback(null, response);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getUserRSVP;
