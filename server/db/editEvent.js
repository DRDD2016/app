var client = require('./init.js');

function editEvent (eventWhat, eventWhere, eventWhen, eventID, callback) {

    var editedEvent = {};
    editedEvent.eventWhat = JSON.stringify(eventWhat);
    editedEvent.eventWhere = JSON.stringify(eventWhere);
    editedEvent.eventWhen = JSON.stringify(eventWhen);


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
