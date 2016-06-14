import io from 'socket.io-client';
import getUserID from './lib/getUserID.js';

export const feedSocket = io(`${location.protocol}//${location.hostname}:9000/feed`);

feedSocket.on('connected', (thing) => {

    var userID = getUserID();

    if (userID) {

        feedSocket.emit('join', JSON.stringify([userID]));
    }
});
