var client = require('./init.js');
var parseObjectValues = require('../lib/parseObjectValues.js');

function getEvent (eventID, callback) {

    client.hgetall(eventID, (error, event) => {

        if (error) {

            callback(error);
        } else {

            if (event !== null){

                var parsedEvent = parseObjectValues(event);
                callback(null, parsedEvent);
            } else {

                callback(null, null);
            }
        }
    });
}

module.exports = getEvent;
