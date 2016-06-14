var redis = require('redis');
var url = require('url');

var dbURL = process.env.DEVELOPMENT || process.env.REDISCLOUD_ONYX_URL;
var parsedURL = url.parse(dbURL);

var pub = redis.createClient(parsedURL.port, parsedURL.hostname, { no_ready_check: true }),
    sub = redis.createClient(parsedURL.port, parsedURL.hostname, { no_ready_check: true });
if (parsedURL.auth) {

    pub.auth(parsedURL.auth.split(':')[1]);
    sub.auth(parsedURL.auth.split(':')[1]);
}
sub.subscribe("notify");

module.exports = {
    pub: pub,
    sub: sub
};
