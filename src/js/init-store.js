import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';

export default function initStore () {

    return createStore(
        rootReducer,
        compose(        
            applyMiddleware(thunkMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : undefined
        )
    );
}
