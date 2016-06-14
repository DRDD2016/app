import io from 'socket.io-client';
import getUserID from './lib/getUserID.js';

export const feedSocket = io(`${location.protocol}//${location.hostname}:9000/feed`);

console.log("YEAHHH", feedSocket);

feedSocket.on('connected', (thing) => {

    feedSocket.emit('join', getUserID());
});
