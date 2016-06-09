var client = require('./init.js');

function editName (userID, firstName, lastName, callback) {
    hashName = 'user:' + userID;
    client.hmsetAsync(hashName, 'firstName', firstName, 'lastName', lastName)
    .then((response) => {

        callback(null, response);
    })
    .catch((error) => {

        callback(error);
    });
}

module.exports = editName;
