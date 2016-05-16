var getCalendar = require('../db/getCalendar.js');
var mapCalendarToEvents = require('../lib/mapCalendarToEvents.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-calendar',
        config: {
            description: 'get user calendar information',

            handler: (request, reply) => {

                getCalendar(request.query.userID, (error, calendar) => {

                    if (error) {
                        reply(error);
                    }
                    mapCalendarToEvents(calendar, (error, mappedCalendar) => {

                        var verdict = error || mappedCalendar;
                        reply(verdict);
                    });
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetCalendar'
};
