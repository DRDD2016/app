var client = require('./init.js');

function addUser (data,url) {

    var userKey = 'user:' + data.profile.id;

    client.hmsetAsync(userKey,
                     'firstName', data.profile.name.first,
                     'lastName', data.profile.name.last,
                     'id', data.profile.id,
                     'token', data.token,
                     'photoURL', url)
        .then(() => {
            client.quit();
        });
}

module.exports = addUser;
