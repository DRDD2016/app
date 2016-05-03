var client = require('./init.js');

function getUser (id, callback) {

    var hashKey = 'user:' + id;
    client.hgetallAsync(hashKey)
        .then((response) => {
            console.log(response,'---response');

            if (response === null) {
                throw new Error("User does not exist.");
            } else {

                delete response.token;
                if (!response.token) {
                    callback(null, response);
                }
            }
        })
        .catch((error) => {
            console.error("Error getting user info from database:", error);
            callback(error);
        });
}

module.exports = getUser;
