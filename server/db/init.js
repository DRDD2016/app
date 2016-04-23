var url = require('url');
var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis);

var dbURL = process.env.REDISCLOUD_URL || "redis://localhost:6379";

var parsedURL = url.parse(dbURL);
var client = redis.createClient(parsedURL.port, parsedURL.hostname, { no_ready_check: true });

if (parsedURL.auth) {

    client.auth(parsedURL.auth.split(':')[1]);
}

client.on('error', (err) => {
    throw new Error(err);
});

module.exports = client;
