# Problems

### Using event listeners in React components

### Setting up codecov with circle.ci

**Problem**: permission denied with Python `pip install`
**Solution**: prepend with `sudo`


**Problem**: Redux state shows up as undefined once middleware with redux thunk has been applied

There were several problems afoot here:

1. After combining reducers, we were accessing the state incorrectly.
```js
const mapStateToProps = (state) => {
    return {
        eventDetails: state.eventDetails
    };
};
```
**Solution**
This needs to be:
```js
const mapStateToProps = (state) => {
    return {
        eventDetails: state.createEvent.eventDetails
    };
};
```

2. Our configuration of Redux DevTools were causing problems.

Error message:
```
The previous state received by the reducer has unexpected type of "Function". Expected argument to be an object with the following keys: "createEvent"
```

This is how we had originally set up our `createStore`:
```js
export default function initStore () {

    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
}
```
`createStore` only requires the first argument, the reducer.  The following are possible:

```js
createStore(myReducer);
createStore(myReducer, [myInitialState]);
createStore(myReducer, [myInitialState], [myMiddleware]);
createStore(myReducer, [myMiddleware]);
```

But we were doing:
```js
createStore(myReducer, [myThunkMiddleware], [myDevTools]);
```

By passing the Redux DevTools configuration as a third argument, `createStore` assumed our second argument was our initial state.  Hence the error message.


**Solution**

Use `compose` to string together the thunk middleware and the DevTools.

Rather embarrassingly, this was clearly demonstrated in the docs for [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) and [Redux itself](http://redux.js.org/docs/api/compose.html)

**Problem**
* TypeError thrown when running tests - no tests were able to run.
* Error originated from the `compose` function inside `createStore`
```bash
TypeError: Cannot read property 'apply' of undefined
```
**Solution**
The `undefined` in the test error was coming from the DevTools configuration:
```js
return createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
);
```
This changes to:
```js
return createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
```
