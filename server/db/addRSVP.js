var client = require('./init.js');

function addRSVP (userID, eventID, status, callback) {

    var setKey = 'RSVP' + ':' + eventID + '|' + status;

    client.saddAsync(setKey, userID)
        .then((success) => {

            callback(null, true);
        })
        .catch((error) => {
            
            callback(error);
        });
}

module.exports = addRSVP;
