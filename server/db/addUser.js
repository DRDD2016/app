var client = require('./init.js');

function addUser (data, url, callback) {

    var userKey = 'user:' + data.profile.id;

    client.hmsetAsync(userKey,
                     'firstName', data.profile.name.first,
                     'lastName', data.profile.name.last,
                     'id', data.profile.id,
                     'token', data.token,
                     'photoURL', url)
        .then(() => {
            callback(null, true);
        })
        .catch((error) => {
            console.error('Error adding user to db:', error.cause);
            callback(error);
        });
}

module.exports = addUser;
