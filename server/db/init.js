var url = require('url');
var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis);

if (!process.env.DEVELOPMENT && !process.env.REDISCLOUD_ONYX_URL) {
    console.error("A redis url is required.");
    console.error("To run the main app, set the REDISCLOUD_ONYX_URL environment variable.");
    console.error("To run tests, set the DEVELOPMENT environment variable.");
    process.exit();
}

var dbURL = process.env.DEVELOPMENT || process.env.REDISCLOUD_ONYX_URL;


var parsedURL = url.parse(dbURL);
var client = redis.createClient(parsedURL.port, parsedURL.hostname, { no_ready_check: true });

if (parsedURL.auth) {

    client.auth(parsedURL.auth.split(':')[1]);
}

client.on('error', (err) => {
    console.error(err);
});

module.exports = client;
