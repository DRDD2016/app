var getRSVPForEvent = require('./getRSVPForEvent.js');

function mapCalendarToRSVPs (calendarArray, userID, callback) {

    if (calendarArray.length === 0) {
        return callback(null, calendarArray);
    }

    var index = 0;

    function report (error, RSVP) {

        if (error) {
            return callback(error);
        }
        calendarArray[index].RSVP = RSVP;
        index++;

        if (index === calendarArray.length) {

            return callback(null, calendarArray);
        } else {
            getRSVPForEvent(calendarArray[index].eventID, userID, report);
        }
    }
    getRSVPForEvent(calendarArray[index].eventID, userID, report);
}

module.exports = mapCalendarToRSVPs;
