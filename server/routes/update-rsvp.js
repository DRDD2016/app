var updateRSVP = require('../lib/updateRSVP.js');
var getEvent = require('../db/getEvent.js');
var notifyEveryone = require('../lib/notifyEveryone.js');

exports.register = (server, options, next) => {

    server.route([{

        method: 'POST',
        path: '/update-rsvp',
        config: {
            description: 'Updates user RSVP for an event',

            handler: (request, reply) => {

                if (!request.payload || !request.payload.userID || !request.payload.eventID || !request.payload.RSVPStatus) {

                    return reply(new Error("Missing data for update-rsvp"));
                }
                var subjectID = request.payload.userID;
                var eventID = request.payload.eventID;
                var userRSVPStatus = request.payload.RSVPStatus;

                updateRSVP(subjectID, eventID, userRSVPStatus, (error, success) => {

                    if (error) {
                        return reply(error);
                    }
                    getEvent(eventID, (error, event) => {
                        
                        if (error) {
                            return reply(error);
                        } else {

                            var recipients = [event.hostID];
                            notifyEveryone(recipients, subjectID, eventID, event, (error, success) => {

                                var verdict = error || success;
                                reply(verdict);
                            });
                        }
                    });
                });
            }
        }

    }]);
    return next();
};


exports.register.attributes = {
    name: 'UpdateRSVP'
};
