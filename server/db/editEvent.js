var client = require('./init.js');

function editEvent (eventName, eventDescription, eventNote, eventWhat, eventWhere, eventWhen, eventID, callback) {

    var editedEvent = {};
    editedEvent.eventWhat = JSON.stringify(eventWhat);
    editedEvent.eventWhere = JSON.stringify(eventWhere);
    editedEvent.eventWhen = JSON.stringify(eventWhen);
    editedEvent.eventName = eventName;
    editedEvent.eventDescription = eventDescription;
    editedEvent.eventNote = eventNote;
    editedEvent.hasEdited = true;


    Object.keys(editedEvent).forEach((eventType, index) => {

        client.hset(eventID, eventType, editedEvent[eventType], (error, response) => {

            if (error){
                callback(error);
            }
            if (Object.keys(editedEvent).length === index + 1) {
                callback(null, response);
            }

        });
    });
}

module.exports = editEvent;
