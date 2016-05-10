var client = require('./init.js');

function getUser (id, callback) {

    var hashKey = 'user:' + id;
    client.hgetallAsync(hashKey)
        .then((response) => {

            if (response === null) {
                callback(new Error("User does not exist."));
            } else {

                delete response.token;
                if (!response.token) {
                    callback(null, response);
                }
            }
        });
}

module.exports = getUser;
