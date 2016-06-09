import io from 'socket.io-client';

export const socket = io(`${location.protocol}//${location.hostname}:9000`);
