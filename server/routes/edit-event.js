var editEvent = require('../db/editEvent.js');
var stringifyObjectValues = require('../lib/stringifyObjectValues.js');
var notifyEveryone = require('../lib/notifyEveryone.js');
var getEvent = require('../db/getEvent.js');
var pub = require('../init-socket.js').pub;


exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/edit-event',
        config: {
            description: 'Edit existing events.',

            handler: (request, reply) => {

                var eventID = request.payload.eventID;

                editEvent(request.payload.eventName, request.payload.eventDescription, request.payload.eventNote, request.payload.eventWhat, request.payload.eventWhere, request.payload.eventWhen, eventID, (error, response) => {

                    if (error) {
                        reply(error);
                    }

                    getEvent(eventID, (error, event) => {

                        var subjectID = request.payload.userID;
                        var recipients = event.invitees.map((invitee) => {
                            return invitee.id;
                        }).concat([event.hostID]);

                        if (error) {
                            reply(error);
                        }

                        notifyEveryone(recipients, subjectID, eventID, event, (error, response) => {

                            if (!error) {
                                pub.publish('notify', JSON.stringify(recipients));
                            }
                            var verdict = error || response;
                            reply(verdict);
                        });

                    });

                });

            }
        }
    }]);

    return next();
};

exports.register.attributes = {
    name: 'EditEvent'
};
