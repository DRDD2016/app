var saveNewEvent = require('../db/saveNewEvent.js');
var createNotification = require('../lib/createNotification.js');
var setNotifications = require('../db/setNotifications.js');

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
                    // create notification object
                    createNotification(data.hostID, eventID, data, (error, notification) => {

                        if (error) {
                            return reply(error);
                        }

                        var inviteesIDs = data.invitees.map((inviteeObj) => {

                            return inviteeObj.id;
                        });
                        setNotifications(inviteesIDs, notification, (error, response) => {
                        
                            var verdict = error || response;
                            return reply(verdict);
                        });
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
