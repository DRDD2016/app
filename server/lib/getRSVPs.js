var getRSVPsForAttendanceStatus = require('../db/getRSVPsForAttendanceStatus.js');

function getRSVPs (eventID, callback) {

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

module.exports = getRSVPs;
