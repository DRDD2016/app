var castVote = require('../db/castVote.js');

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
                var userID = request.payload.userID.match(/\d+/)[0];

                castVote(request.payload.poll, userID, request.payload.eventID, (error, response) => {

                    var result = error || response;
                    return reply(result);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'ConfirmPoll'
};
