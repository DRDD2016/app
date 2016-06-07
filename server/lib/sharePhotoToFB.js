var FB = require('fb');

function sharePhotoToFB (token, photoURL, callback) {
    FB.setAccessToken(token);
    FB.api(
        '/me/photos',
        'POST',
        {
            "url": photoURL
        },
        (response) => {
            if (response && !response.error) {

                callback(null, response);
            } else {
                callback(new Error(response.error));
            }
        }
    );
}

module.exports = sharePhotoToFB;
