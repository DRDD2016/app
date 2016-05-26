var saveNewEvent = require('../db/saveNewEvent.js');
var notifyEveryone = require('../lib/notifyEveryone.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/new-event',
        config: {
            description: 'saves newly created events.',

            handler: (request, reply) => {

                var event = request.payload;
                saveNewEvent(event, (error, eventID) => {

                    if (error) {
                        return reply(error);
                    } else {

                        var recipients = event.invitees.map((invitee) => {

                            return invitee.id;
                        }).concat([event.hostID]);

                        var subjectID = event.hostID;

                        notifyEveryone(recipients, subjectID, eventID, event, (error, success) => {
                            
                            var verdict = error || success;
                            reply(verdict);
                        });
                    }
                });
            }
        }
    }]);

    return next();
};

exports.register.attributes = {
    name: 'NewEvent'
};
