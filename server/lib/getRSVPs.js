var getRSVPsForAttendanceStatus = require('../db/getRSVPsForAttendanceStatus.js');

function getRSVPs (eventID, callback) {

    var RSVPs = {
        going: [],
        notGoing: [],
        maybe: []
    };

    var progressCount = 0;

    function report (error, attendanceStatus, data) {

        if (error) {
            return callback(error);
        }
        RSVPs[attendanceStatus] = data;
        progressCount++;

        if (progressCount === eventTypes.length) {

            callback(null, RSVPs);
        }
    }

    RSVPs.forEach((attendanceStatus) => {

        getRSVPsForAttendanceStatus(eventID, attendanceStatus, report);
    });
}
