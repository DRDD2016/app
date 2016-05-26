var client = require('./init.js');

function deletePreviousRSVP (userID, eventID, status, callback) {

    var setKey = 'RSVP' + ':' + eventID + '|' + status;

    client.sremAsync(setKey, userID)
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

module.exports = deletePreviousRSVP;
