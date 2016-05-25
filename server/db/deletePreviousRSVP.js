var client = require('./init.js');

function deletePreviousRSVP (userID, eventID, callback) {

    var statuses = ['going', 'notGoing', 'maybe'];
    var index = 0;
    var setKey = 'RSVP' + ':' + eventID + '|' + statuses[index];

    sremAsync(setKey, userID)
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
