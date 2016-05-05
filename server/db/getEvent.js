var client = require('./init.js');
var parseObjectValues = require('../lib/parseObjectValues.js');

function getEvent (eventID) {

    return client.hgetallAsync(eventID)
        .then((event) => {
            var parsedEvent = parseObjectValues(event);
            return parsedEvent;
        })
        .catch((error) => {
            return error;
        });
}

module.exports = getEvent;
