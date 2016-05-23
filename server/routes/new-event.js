var saveNewEvent = require('../db/saveNewEvent.js');
var notifyEveryone = require('../lib/notifyEveryone.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/new-event',
        config: {
            description: 'saves newly created events.',

            handler: (request, reply) => {

                var data = request.payload;
                saveNewEvent(data, (error, eventID) => {

                    if (error) {
                        return reply(error);
                    }
                    notifyEveryone(data.hostID, eventID, data, (error, success) => {

                        var verdict = error || success;
                        reply(verdict);
                    });
                    // go to invitees list
                    // for each invitee, push new notification object

                });
            }
        }
    }]);

    return next();
};

exports.register.attributes = {
    name: 'NewEvent'
};
