var deletePreviousRSVP = require('../db/deletePreviousRSVP.js');
var addRSVP = require('../db/addRSVP.js');

function updateRSVP (userID, eventID, RSVPStatus, callback) {

    deletePreviousRSVP(userID, eventID, (error, success) => {

        if (error) {
            return callback(error);
        } else {

            addRSVP(userID, eventID, RSVPStatus, callback);
        }
    });
}

module.exports = updateRSVP;
