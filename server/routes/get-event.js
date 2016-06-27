var getEvent = require('../db/getEvent.js');
var getVotes = require('../lib/getVotes.js');
var getPoll = require('../lib/getPoll.js');
var getAllRSVPs = require('../lib/getAllRSVPs.js');
var getEventPhotos = require('../db/getEventPhotos.js');
var getDeletedPhotos = require('../db/getDeletedPhotos.js');
var hasVoted = require('../lib/hasVoted.js');

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

                        getAllRSVPs(request.query.eventID, (error, RSVPs) => {

                            if (error) {
                                reply(error);
                            }
                            getEventPhotos(request.query.eventID, (error, photos) => {

                                if (error) {
                                    reply(error);
                                }

                                getDeletedPhotos(request.query.eventID, request.query.userID, (error2, deletedPhotos) => {
                                    var response = error || { event: event, invitees: event.invitees, RSVPs: RSVPs, photos: photos, deletedPhotos: deletedPhotos };

                                    reply(response);

                                });

                            });

                        });
                    }
                    if (!isHost && event.isPoll) {

                        getPoll(event, request.query.eventID, request.query.userID, (error, pollObject) => {

                            if (error) {
                                reply(error);
                            }

                            hasVoted(pollObject, (value) => {

                                var response = { event: event, poll: pollObject, hasVoted: value };
                                reply( response );

                            });
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
