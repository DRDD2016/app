var client = require('./init.js');

function getUser (id, callback) {

    var hashKey = 'user:' + id;
    console.log("hashKey", hashKey);
    client.hgetallAsync(hashKey)
        .then((response) => {

            if (!response)
                throw new Error;
            // delete response.token;
        })
        .then((userInfo) => {
            return callback(userInfo);
        })
        .catch((error) => {
            console.log("ERRORRRR:", error);
            callback(error);
        });
}

module.exports = getUser;
