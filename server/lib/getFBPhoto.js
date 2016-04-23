var FB = require('fb');


function getFBPhoto(id, token, callback) {
    FB.setAccessToken(token);

    FB.api(
        '/me/picture?redirect=false&height=250&width=250',
        'GET',
        {},
            function(response) {
                if (response && !response.error) {
                    callback(response.data.url);
                } else {
                    console.log(response.error);
                }
            }
    );

}

module.exports = getFBPhoto;
