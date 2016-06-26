var client = require('./init.js');

function getUserRSVPStatus (eventID, status, userID, callback) {

    var setKey = 'RSVP:' + eventID + '|' + status;

    client.sismemberAsync(setKey, userID)
        .then((result) => {

            callback(null, result);
        })
        .catch((error) => {

            callback(error);
        });
}
