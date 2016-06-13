var setHostEventChoices = require('../lib/setHostEventChoices.js');
var convertPollToConfirmedEvent = require('../db/convertPollToConfirmedEvent.js');
var getEvent = require('../db/getEvent.js');
var notifyEveryone = require('../lib/notifyEveryone.js');


exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/confirm-event',
        config: {
            description: 'event confirmation from host, change poll to host, propogate notifications that an event has been created, create RSVP section as well',

            handler: (request, reply) => {

                var eventID = request.payload.eventID;
                var hostEventChoices = request.payload.hostEventChoices;

                if (!eventID) {
                    reply(new Error("[confirm-event] eventID missing"));
                }
                if (!hostEventChoices) {
                    reply(new Error("[confirm-event] host's event choices missing"));
                }

                setHostEventChoices(eventID, hostEventChoices, (error, success) => {

                    if (error) {
                        reply(error);
                    }
                    convertPollToConfirmedEvent(eventID, (error, success) => {

                        getEvent(eventID, (error, event) => {

                            if (error) {
                                reply(error);
                            }

                            var recipients = event.invitees.map((invitee) => {

                                return invitee.id;
                            }).concat([event.hostID]);

                            var subjectID = event.hostID;

                            notifyEveryone(recipients, subjectID, eventID, event, (error, success) => {

                                var verdict = error || success;
                                reply(recipients);
                            });
                        });
                    });
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'ConfirmEvent'
};
