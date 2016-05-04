import { combineReducers } from 'redux';
import createEvent from './create-event.js';
import auth from './auth.js';
import user from './user.js';
import notifications from './notifications.js';

export default combineReducers({
    auth,
    createEvent,
    user,
    notifications
});
