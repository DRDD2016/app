var client = require('./init.js');
var index = 0;

function deletePreviousRSVP (userID, eventID, callback) {

    var statuses = ['going', 'notGoing', 'maybe'];
    var setKey = 'RSVP' + ':' + eventID + '|' + statuses[index];

    client.sremAsync(setKey, userID)
        .then((response) => {
            index++;

            if (response === 1 || index === statuses.length) {
                return callback(null, true);
            } else {
                deletePreviousRSVP(userID, eventID, callback);
            }
        })
        .catch((error) => {
            return callback(error);
        });
}

module.exports = deletePreviousRSVP;
