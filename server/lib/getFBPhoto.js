var FB = require('fb');


function getFBPhoto (id, token, callback) {
    FB.setAccessToken(token);

    FB.api(
        '/me/picture?redirect=false&height=250&width=250',
        'GET',
        {},
        (response) => {
            if (response && !response.error) {
                return callback(null, response.data.url);
            } else {
                console.error(response.error);
                return callback(error);
            }
        }
    );

}

module.exports = getFBPhoto;
