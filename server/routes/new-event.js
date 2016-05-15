var saveNewEvent = require('../db/saveNewEvent.js');
var createNotification = require('../lib/createNotification.js');
var setNotifications = require('../db/setNotifications.js');
var addEventToCalendar = require('../db/addEventToCalendar.js');

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
                    createNotification(data.hostID, eventID, data, (error, notification) => {

                        if (error) {
                            return reply(error);
                        }
                        var inviteesIDs = data.invitees.map((inviteeObj) => {

                            return inviteeObj.id;
                        });
                        setNotifications(inviteesIDs, notification, (error, response) => {

                            if (error) {
                                return reply(error);
                            }
                            if (!data.isPoll) {

                                var calendarRecipientsArray = inviteesIDs.concat([data.hostID]);
                                addEventToCalendar(calendarRecipientsArray, eventID, (error, response) => {

                                    var verdict = error || response;
                                    return reply(verdict);
                                });
                            } else {
                                reply(response);
                            }
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
