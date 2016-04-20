import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';

export default function initStore () {

    return createStore(
        rootReducer,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
}
