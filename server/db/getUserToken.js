var client = require('./init.js');

function getUserToken (id, callback) {

    var hashKey = "user:" + id;

    client.hgetAsync(hashKey, "token")
        .then((response) => {

            if (response === null) {
                return new Error("Problem fetching token from database");
            }

            callback(null, response);

        })
        .catch((error) => {

            callback(error, null);
        });
}

module.exports = getUserToken;
