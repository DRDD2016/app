var getUserRSVP = require('../db/getUserRSVP.js');
/**
Returns a user's attendance status for a given event.
Returns null if no RSVP info found for the user.
**/
function getRSVPForEvent (eventID, userID, callback) {

    var index = 0;
    var statuses = ['going', 'notGoing', 'maybe'];

    function report (error, result) {

        if (error) {
            return callback(error);
        }
        index++;
        if (result) {

            return callback(null, result);
        } else if (index === statuses.length && !result) {

            return callback(null, null);
        } else {
            getUserRSVP(eventID, userID, statuses[index], report);
        }
    }
    getUserRSVP(eventID, userID, statuses[index], report);
}

module.exports = getRSVPForEvent;
