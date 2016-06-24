var getCalendar = require('../db/getCalendar.js');
var mapCalendarToEvents = require('../lib/mapCalendarToEvents.js');
var mapCalendarToPhoto = require('../lib/mapCalendarToPhoto.js');
var mapCalendarToRSVPs = require('../lib/mapCalendarToRSVPs.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-calendar',
        config: {
            description: 'get user calendar information',

            handler: (request, reply) => {

                var userID = request.query.userID;

                getCalendar(userID, (error, calendar) => {

                    if (error) {
                        return reply(error);
                    }
                    mapCalendarToEvents(calendar, (error, mappedCalendar) => {

                        if (error) {
                            return reply(error);
                        }
                        mapCalendarToPhoto(mappedCalendar, (error, calendarWithPhoto) => {

                            if (error) {
                                return reply(error);
                            }
                            mapCalendarToRSVPs(calendarWithPhoto, userID, (error, calendarWithRSVPs) => {

                                var verdict = error || calendarWithRSVPs;
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
    name: 'GetCalendar'
};
