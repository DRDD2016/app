var client = require('../../server/db/init.js');

client.hmsetAsync("user:10154129575200996",
                 'firstName', "Sohil",
                 'lastName', "Pandya",
                 'id', 10154129575200996,
                 'token', "notokenhere",
                 'photoURL', "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/12821522_10154022257850996_5243104697257562021_n.jpg?oh=3b82501dc03ce1aa1d0db64278f606fa&oe=57AC45AB");

client.hmsetAsync("user:12345678",
          'firstName', "Harry",
          'lastName', "Potter",
          'id', 12345678,
          'token', "harryToken",
          'photoURL', "http://harrypotter.com/photo.jpg");
