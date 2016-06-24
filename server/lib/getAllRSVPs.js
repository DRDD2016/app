var getRSVPsForAttendanceStatus = require('../db/getRSVPsForAttendanceStatus.js');

/*
 Gets all RSVPs for a given event
*/

function getAllRSVPs (eventID, callback) {

    var RSVPs = {
        going: [],
        notGoing: [],
        maybe: []
    };
    var statuses = Object.keys(RSVPs);
    var progressCount = 0;

    function report (error, attendanceStatus, data) {

        if (error) {
            return callback(error);
        }
        RSVPs[attendanceStatus] = data;

        progressCount++;

        if (progressCount === statuses.length) {

            callback(null, RSVPs);
        }
    }

    statuses.forEach((attendanceStatus) => {

        getRSVPsForAttendanceStatus(eventID, attendanceStatus, report);
    });
}

module.exports = getAllRSVPs;
