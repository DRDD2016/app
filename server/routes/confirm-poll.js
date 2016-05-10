var castVote = require('../db/castVote.js');
var getEvent = require('../db/getEvent.js');
var createNotification = require('../lib/createNotification.js');
var setNotifications = require('../db/setNotifications.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/confirm-poll',
        config: {
            description: 'add/update invitee vote',

            handler: (request, reply) => {

                if (!request.payload) {

                    return reply(new Error("Missing data for confirm-poll"));
                }
                var inviteeID = request.payload.userID;
                var eventID = request.payload.eventID;
                castVote(request.payload.poll, inviteeID, eventID, (error, response) => {

                    if (error) {
                        return reply(error);
                    }
                    getEvent(eventID)
                        .then((event) => {

                            createNotification(inviteeID, eventID, event, (error, notification) => {

                                if (error) {
                                    return reply(error);
                                }
                                setNotifications([event.hostID], notification, (error, response) => {

                                    var result = error || response;
                                    reply(result);
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
    name: 'ConfirmPoll'
};
