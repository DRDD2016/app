var client = require('./init.js');

function saveNewEvent (event, callback) {

    client.incr("eventKeys", (error, reply) => {
        var eventID = "event:" + reply;

        client.hmsetAsync(eventID, "eventName", event.eventName,
                                    "eventDescription", event.eventDescription,
                                    "eventWhat", event.eventWhat, "eventWhere", event.eventWhere, "eventWhen", event.eventWhen,
                                    "invitees", event.invitees, "hostID", event.hostID, "isPoll", event.isPoll)
                             .then(() => {
                                 callback(null, true);
                             })
                             .catch((error) => {
                                 callback(error);
                             });
    });
}

module.exports = saveNewEvent;
