var client = require('./init.js');
var parseObjectValues = require('../lib/parseObjectValues.js');

function getEvent (eventID, callback) {

    client.hgetallAsync(eventID)
        .then((event) => {
            if (event !== null){
                var parsedEvent = parseObjectValues(event);
                callback(null, parsedEvent);
            } else {
                callback(null, null);
            }

        })
        .catch((error) => {

            callback(error);
        });
}

module.exports = getEvent;
