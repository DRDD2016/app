var client = require('./init.js');

function convertPollToConfirmedEvent (eventID, callback) {

    client.hsetAsync(eventID, 'isPoll', 'false')
        .then((success) => {

            callback(null, true);
        })
        .catch((error) => {

            callback(error);
        });
}

module.exports = convertPollToConfirmedEvent;
