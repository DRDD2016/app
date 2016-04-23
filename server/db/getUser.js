var client = require('./init.js');

function getUser(id, callback) {
    var hashKey = 'user:' + id;
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
            throw error;
        });
}

module.exports = getUser;
