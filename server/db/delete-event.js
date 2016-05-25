var client = require('./init.js');


function deleteEvent (eventID, callback) {

    client.del(eventID, (error, response) => {
        if (error) {
            callback(error);
        } else {
            callback(null, response);
        }
    });
}

module.exports = deleteEvent;
