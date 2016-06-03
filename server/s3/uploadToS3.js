var AWS = require('aws-sdk');
var fs = require('fs');
var gm = require('gm');

AWS.config.update({
    region: 'eu-west-1'
});

var s3 = new AWS.S3();

function uploadToS3 (photo, eventID, callback) {

    // var readStream = fs.createReadStream(photo, { encoding: 'base64' } );

    // gm(readStream)
    //     .quality(50)
    //     .stream((err, stdout, srderr) => {
    var params = { Bucket: 'spark-app-demo', Key: eventID + '/' + Date.now(), Body: photo };
    s3.upload(params)
        .on('httpUploadProgress', (event) => {
                console.log(event, '----event');
        })
        .send((error, data) => {
            if (error) {
                callback(error);
            } else {
                callback(null, data);
            }
        });
        // });

}

module.exports = uploadToS3;
