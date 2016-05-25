var deletePreviousRSVP = require('../db/deletePreviousRSVP.js');
var addRSVP = require('../db/addRSVP.js');

function updateRSVP (userID, eventID, RSVPStatus, callback) {

    // remove user from each rsvp
    deletePreviousRSVP(userID, eventID, (error, success) => {

        if (error) {
            return callback(error);
        }

        addRSVP(userID, eventID, RSVPStatus, callback);
    });
}

module.exports = updateRSVP;
