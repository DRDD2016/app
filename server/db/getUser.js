var client = require('./init.js');

function getUser (id, callback) {

    var hashKey = 'user:' + id;

    client.hgetallAsync(hashKey)
        .then((response) => {
            console.log(1);
            if (!response)
                throw new Error;
            delete response.token;
            return response;
        })
        .then((userInfo) => {
            console.log(userInfo, 2);
            if (!userInfo.token) {
                callback(userInfo);
            }
        })
        // .then(() => {
        //     console.log(3);
        //     client.quit();
        // })
        .catch((error) => {
            console.log(4);
            console.error("Error getting user info from database:", error.cause);
            callback(error);
        });
}

module.exports = getUser;
