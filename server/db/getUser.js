var client = require('./init.js');

function getUser (id) {

    var hashKey = 'user:' + id;
    return client.hgetallAsync(hashKey)
        .then((response) => {

            if (response === null) {
                throw new Error("User does not exist.");
            } else {

                delete response.token;
                if (!response.token) {
                    return response;
                }
            }
        });
}

module.exports = getUser;
