import io from 'socket.io-client';
import getUserID from './lib/getUserID.js';

let port = process.env.PORT || 9000;

export const feedSocket = io(`${location.protocol}//${location.hostname}:${port}/feed`);

feedSocket.on('connected', (thing) => {

    var userID = getUserID();

    if (userID) {

        feedSocket.emit('join', JSON.stringify([userID]));
    }
});
