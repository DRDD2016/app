import { createStore } from 'redux';
import reducer from './reducers/create-event.js';

export default function initStore () {
    return createStore(reducer);
}
