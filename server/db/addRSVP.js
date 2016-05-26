var client = require('./init.js');

function addRSVP (userID, eventID, status, callback) {

    var setKey = 'RSVP' + ':' + eventID + '|' + status;
    console.log(setKey, userID);
    client.saddAsync(setKey, userID)
        .then((success) => {
            console.log("success?", success);
            callback(null, true);
        })
        .catch((error) => {
            console.log("error?", error);
            callback(error);
        });
}

module.exports = addRSVP;
