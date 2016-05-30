var client = require('./init.js');

function deleteIndividualRSVP (eventID, status, callback) {

    var setKey = 'RSVP:' + eventID + '|' + status;

    client.delAsync(setKey)
    .then((response) => {

        return callback(null, response);
    })
    .catch((error) => {

        return callback(error);
    });

}

module.exports = deleteIndividualRSVP;
