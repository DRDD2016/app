import { createStore } from 'redux';
import reducer from './reducers/create-event.js';

export default function initStore (initialState) {
    return createStore(
        reducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
}
