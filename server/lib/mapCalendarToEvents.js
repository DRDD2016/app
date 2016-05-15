var getEvent = require('../db/getEvent.js');

function mapCalendarToEvents (eventIDArray, callback, index, previous) {

    if (!index && !previous) {
        index = 0;
        previous = [];
    }
    if (previous.length === eventIDArray.length) {
        return callback(null, previous);
    }
    getEvent(eventIDArray[index], (error, event) => {

        if (error) {
            return callback(error);
        }
        previous.push(event);
        mapCalendarToEvents(eventIDArray, callback, ++index, previous);
    });
}

module.exports = mapCalendarToEvents;
