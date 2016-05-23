var client = require('./init.js');

function getRSVPsForAttendanceStatus (eventID, status, callback) {

    var setKey = 'rsvp:' + eventID + '|' + status;

    client.smembersAsync(setKey)
        .then((RSVPs) => {

            callback(null, status, RSVPs);
        })
        .catch((error) => {
            
            callback(error);
        });
}

module.exports = getRSVPsForAttendanceStatus;
