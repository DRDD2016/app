var deleteEvent = require('../db/deleteEvent.js');
var getEvent = require('../db/getEvent.js');
var deleteEventFromUserCalendars = require('../lib/deleteEventFromUserCalendars.js');
var deleteRSVPs = require('../lib/deleteRSVPs.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/delete-event',
        config: {
            description: 'delete the event from the database',

            handler: (request, reply) => {


                getEvent(eventID, (error, event) => {

                    if (error) {
                        reply(error);
                    }
                    var users = event.invitees.map((invitee) => {
                        return invitee.id;
                    }).concat([event.hostID]);

                    deleteEvent(request.query.eventID, (error, response) => {

                        if (error) {
                            reply(error);
                        }

                        deleteEventFromUserCalendars(users, request.query.eventID, (error, response) => {

                            if (error) {
                                reply(error);
                            }

                            deleteRSVPs(request.query.eventID, (error, success) => {

                                const verdict = error || response;
                                reply(verdict);
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
    name: 'DeleteEvent'
};
