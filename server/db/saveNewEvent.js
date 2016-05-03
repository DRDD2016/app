var client = require('./init.js');
var stringifyObjectValues = require('../lib/stringifyObjectValues.js');

function saveNewEvent (event, callback) {

    event = stringifyObjectValues(event);

    client.incr("eventKeys", (error, reply) => {
        var eventID = "event:" + reply;

        client.hmsetAsync(eventID, "eventName", event.eventName,
                                    "eventDescription", event.eventDescription,
                                    "eventWhat", event.eventWhat, "eventWhere", event.eventWhere, "eventWhen", event.eventWhen,
                                    "invitees", event.invitees, "hostID", event.hostID, "isPoll", event.isPoll)
                             .then(() => {
                                 callback(null, eventID);
                             })
                             .catch((error) => {
                                 callback(error);
                             });
    });
}

module.exports = saveNewEvent;
