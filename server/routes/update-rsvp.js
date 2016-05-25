
var getEvent = require('../db/getEvent.js');
var notifyEveryone = require('../lib/notifyEveryone.js');

exports.register = (server, options, next) => {

    server.route([{

        method: 'POST',
        path: '/update-rsvp',
        config: {
            description: 'Updates user RSVP for an event',

            handler: (request, reply) => {

                if (!request.payload) {

                    return reply(new Error("Missing data for update-rsvp"));
                }
                var userID = request.payload.userID;
                var eventID = request.payload.eventID;
                var userRSVPStatus = request.payload.RSVPStatus;

                // update rsvp;
            }
        }

    }]);
    return next();
};


exports.register.attributes = {
    name: 'UpdateRSVPs'
};
