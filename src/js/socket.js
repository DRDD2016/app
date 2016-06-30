import io from 'socket.io-client';
import getUserID from './lib/getUserID.js';
import { store } from './init-store.js';
import { getNotifications } from './actions/notifications.js';

let port = process.env.PORT || 9000;
let currentLocation = '';

if (process.env.DEVELOPMENT) {
    currentLocation = `${location.protocol}//${location.hostname}:${port}`;
}

export const feedSocket = io(`${currentLocation}/feed`);

feedSocket.on('connected', (thing) => {

    var userID = getUserID();

    if (userID) {

        feedSocket.emit('join', JSON.stringify([userID]));
        store.dispatch(getNotifications(userID));
    }
});
