import { combineReducers } from 'redux';
import createEvent from './create-event.js';
import auth from './auth.js';

export default combineReducers({
    auth,
    createEvent
});
