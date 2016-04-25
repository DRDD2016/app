var client = require('./init.js');

function addUser (data, url) {

    var userKey = 'user:' + data.profile.id;

    client.hmsetAsync(userKey,
                     'firstName', data.profile.name.first,
                     'lastName', data.profile.name.last,
                     'id', data.profile.id,
                     'token', data.token,
                     'photoURL', url)
        .catch((error) => {
            console.error('Error adding user to db:', error.cause);
        });
}

module.exports = addUser;
