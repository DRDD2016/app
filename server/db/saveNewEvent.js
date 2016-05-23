var client = require('./init.js');
var stringifyObjectValues = require('../lib/stringifyObjectValues.js');

function saveNewEvent (event, callback) {
    var stringifiedObject = stringifyObjectValues(event);

    client.incr("eventKeys", (error, reply) => {
        var eventID = "event:" + reply;

        client.hmsetAsync(eventID, "eventName", stringifiedObject.eventName,
                                   "eventDescription", stringifiedObject.eventDescription,
                                   "eventNote", '',
                                   "eventWhat", stringifiedObject.eventWhat, "eventWhere", stringifiedObject.eventWhere, "eventWhen", stringifiedObject.eventWhen,
                                   "invitees", stringifiedObject.invitees, "isPoll", stringifiedObject.isPoll,
                                   "hostID", stringifiedObject.hostID,
                                   "hostPhotoURL", stringifiedObject.hostPhotoURL,
                                   "eventID", eventID)
         .then(() => {
             callback(null, eventID);
         })
         .catch((error) => {
             callback(error);
         });
    });
}

module.exports = saveNewEvent;
