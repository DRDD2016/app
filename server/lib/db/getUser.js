var client = require('./init.js');

function getUser(id, callback) {
    var hashKey = 'user:' + id;
    client.hgetallAsync(hashKey)
    .then((response) => {
        delete response.token;
        return callback(response);
    })
    .catch((error) => {
        throw error;
    });
}

module.exports = getUser;
