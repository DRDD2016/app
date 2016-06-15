var client = require('./init.js');

function getUser (id, callback) {

    var hashKey = 'user:' + id;
    client.hgetallAsync(hashKey)
        .then((response) => {
        
            if (response === null) {
                console.error(new Error("User does not exist: " + hashKey));
                callback(null, null);
            } else {

                delete response.token;
                if (!response.token) {
                    callback(null, response);
                }
            }
        });
}

module.exports = getUser;
