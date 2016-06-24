var getRSVPForEvent = require('./getRSVPForEvent.js');

function mapCalendarToRSVPs (calendarArray, userID, callback) {

    var index = 0;

    function report (error, RSVP) {

        if (error) {
            return callback(error);
        }
        calendarArray[index].RSVP = RSVP;
        index++;

        if (index === calendarArray.length) {

            return callback(null, calendarArray);
        }
    }

    calendarArray.forEach((eventInfo) => {

        getRSVPForEvent(eventInfo.eventID, userID, report);
    });
}

module.exports = mapCalendarToRSVPs;
