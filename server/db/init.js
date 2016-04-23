var url = require('url');
var redis = require('redis');
var bluebird = require('bluebird');
var dbURL = process.env.REDISCLOUD_URL;

// bluebird.promisifyAll(redis.redisClient.prototype);
// bluebird.promisifyAll(redis.multi.prototype);

bluebird.promisifyAll(require("redis"));


if (!dbURL) {

    throw new Error("Redis environment variable has not been set");
}

var redisURL = url.parse(dbURL);

var client = redis.createClient(redisURL.port, redisURL.hostname, { no_ready_check: true });
client.auth(redisURL.auth.split(':')[1]);

client.on('error', function(err) {
    console.log('Redis error: ' + err);
});

module.exports = client;
