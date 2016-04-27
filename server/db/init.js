var url = require('url');
var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis);

// var dbURL = process.env.REDIS_URL;
var dbURL = process.env.DEVELOPMENT || process.env.REDIS_URL;


var parsedURL = url.parse(dbURL);
var client = redis.createClient(parsedURL.port, parsedURL.hostname, { no_ready_check: true });

if (parsedURL.auth) {

    client.auth(parsedURL.auth.split(':')[1]);
}

client.on('error', (err) => {
    console.error(err);
});

module.exports = client;
