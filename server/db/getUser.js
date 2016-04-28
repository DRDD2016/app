var client = require('./init.js');

function getUser (id, callback) {

    var hashKey = 'user:' + id;
    console.log(hashKey, '----hashkey');
    client.hgetallAsync(hashKey)
        .then((response) => {
            console.log(response,'---response');

            if (!response) {
                throw new Error("problem getting user");
            }
            delete response.token;
            return response;
        })
        .then((userInfo) => {

            if (!userInfo.token) {
                callback(userInfo);
            }
        })
        .catch((error) => {
            console.error("Error getting user info from database:", error.cause);
            callback(error);
        });
}

module.exports = getUser;
