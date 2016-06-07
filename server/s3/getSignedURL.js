var AWS = require('aws-sdk');
AWS.config.update({
    region: 'eu-west-1'
});
var s3 = new AWS.S3();


function getSignedURL (filename, filetype, eventID, callback) {

    var key = eventID + "/" + Date.now() + filename;

    var params = {
        Bucket: 'spark-app-demo',
        Key: key,
        Expires: 300,
        ContentType: filetype,
        ACL: 'public-read-write'
    };
    /*
    Note the camel casing of the s3 method getSignedUrl.
    */
    s3.getSignedUrl('putObject', params, (error, signedURL) => {

        if (error) {
            console.error(error);
            callback(error);
        } else {
            
            callback(null, signedURL);
        }
    });
}

module.exports = getSignedURL;
