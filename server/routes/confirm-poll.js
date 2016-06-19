var castVote = require('../db/castVote.js');
var getEvent = require('../db/getEvent.js');
var notifyEveryone = require('../lib/notifyEveryone.js');
var createNotification = require('../lib/createNotification.js');
var setNotifications = require('../db/setNotifications.js');
var pub = require('../init-socket.js').pub;


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
                var subjectID = request.payload.userID;
                var eventID = request.payload.eventID;
                castVote(request.payload.poll, subjectID, eventID, (error, response) => {

                    if (error) {
                        return reply(error);
                    }
                    getEvent(eventID, (error, event) => {

                        if (error) {
                            return reply(error);
                        }
                        var recipients = [event.hostID];
                        notifyEveryone(recipients, subjectID, eventID, event, (error, success) => {

                            if (!error) {
                                pub.publish('notify', JSON.stringify(recipients));
                            }
                            var verdict = error || success;
                            reply(success);
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
