var getEvent = require('../db/getEvent.js');
var getVotes = require('../lib/getVotes.js');
var getPoll = require('../lib/getPoll.js');
var getRSVPs = require('../lib/getRSVPs.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-event',
        config: {
            description: 'get the requested event',

            handler: (request, reply) => {

                getEvent(request.query.eventID, (error, event) => {

                    if (error) {

                        return reply(error);
                    }
                    if (event === null) {
                        return reply( { event: false } );
                    }
                    var isHost = event.hostID === request.query.userID;

                    if (isHost && event.isPoll) {

                        getVotes(event, request.query.eventID, (error, voteObject) => {

                            var response = error || { event: event, tally: voteObject };

                            reply( response );
                        });
                    }
                    if ((isHost && !event.isPoll) || (!isHost && !event.isPoll)) {

                        getRSVPs(request.query.eventID, (error, RSVPs) => {

                            var response = error || { event: event, invitees: event.invitees, RSVPs: RSVPs };

                            reply(response);
                        });
                    }
                    if (!isHost && event.isPoll) {

                        getPoll(event, request.query.eventID, request.query.userID, (error, pollObject) => {

                            var response = error || { event: event, poll: pollObject };

                            reply( response );
                        });
                    }
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetEvent'
};
