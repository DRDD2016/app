var client = require('./init.js');
var parseObjectValues = require('../lib/parseObjectValues.js');

function getEvent (eventID, callback) {

    client.hgetallAsync(eventID)
        .then((event) => {
            var parsedEvent = parseObjectValues(event);
            callback(null, parsedEvent);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getEvent;
