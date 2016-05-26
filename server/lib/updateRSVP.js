var deletePreviousRSVP = require('../db/deletePreviousRSVP.js');
var addRSVP = require('../db/addRSVP.js');

function updateRSVP (userID, eventID, RSVPStatus, callback) {

    var index = 0;
    var statuses = ['going', 'notGoing', 'maybe'];

    function report (error, response) {

        if (error) {
            callback(error);
        }
        index++;
        if (response === 1 || index === statuses.length) {
        
            addRSVP(userID, eventID, RSVPStatus, callback);
        }
        else {

            deletePreviousRSVP(userID, eventID, statuses[index], report);
        }
    }

    deletePreviousRSVP(userID, eventID, statuses[index], report);
}

module.exports = updateRSVP;
