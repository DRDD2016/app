// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

var fs = require('fs');

var gm = require('gm');

/**
 * Don't hard-code your credentials!
 * Export the following environment variables instead:
 *
 * export AWS_ACCESS_KEY_ID='AKID'
 * export AWS_SECRET_ACCESS_KEY='SECRET'
 */

// Set your region for future requests.
AWS.config.update({
    region: 'eu-west-1'
});


var s3 = new AWS.S3({
    params: {
        Bucket: 'spark-app-demo',
        Key: 'event:1/photo-17' //this will be fetched from the axios request
    }
});
//
// var options = {
//     Bucket: 'spark-app-demo',
//     EncodingType: 'url',
//     Prefix: 'event:1'
// };
// s3.listObjects(options, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// });

// var readstream = fs.createReadStream(__dirname + '/../../public/big-image.JPG');
// gm(readstream)
//     .quality(50)
//     .stream(function (err, stdout, stderr) {
//         var writeStream = fs.createWriteStream()
//         console.log(stdout,'======');
//         s3.upload({ Body: stdout }).
//           on('httpUploadProgress', function(evt) { console.log(evt,'------'); }).
//           send(function(err, data) { console.log(err, data) });
//     })

// gm(__dirname + '/../../public/big-image.JPG')
// .quality(50)
// .write(__dirname + '/../../public/big-image-compressed.JPG', function (err) {
//     console.log(err);
//   if (!err)
//   var readstream = fs.createReadStream(__dirname + '/../../public/big-image-compressed.JPG');
//     s3.upload({ Body: readstream }).
//     on('httpUploadProgress', function (evt) { console.log(evt,'------'); }).
//     send(function (err, data) { console.log(err, data); });
// });


var readStream = fs.createReadStream(__dirname + '/../../public/big-image-compressed.JPG');
gm(readStream)
.quality(40)
.stream( (err, stdout, stderr) => {
    s3.upload({ Body: stdout }).
    on('httpUploadProgress', function (evt) { console.log(evt,'------'); }).
    send(function (err, data) { console.log(err, data); });
});


//
// var readstream = fs.createReadStream(__dirname + '/../../public/big-image-compressed.JPG');
// s3.upload({ Body: readstream }).
//   on('httpUploadProgress', function (evt) { console.log(evt,'------'); }).
//   send(function (err, data) { console.log(err, data); });
