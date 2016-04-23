var client = require('./init.js');

function getUser (id, callback) {

    var hashKey = 'user:' + id;

    client.hgetallAsync(hashKey)
        .then((response) => {

            if (!response)
                throw new Error;
            delete response.token;
            return response;
        })
        .then((userInfo) => {
            if (!userInfo.token) {
                callback(userInfo);
            }
        })
        .then(() => {
            client.quit();
        })
        .catch((error) => {
            console.error("Error getting user info from database:", error);
            callback(error);
        });
}

module.exports = getUser;
