import update from 'react-addons-update';
import { GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE } from '../actions/event.js';

const initialState = {
    data: {},
    isFetching: false,
    error: undefined,
    poll: {
        eventWhat: [],
        eventWhere: [],
        eventWhen: [],
    }
};




export default function event (state = initialState, action) {

    switch (action.type) {

    case GET_EVENT_REQUEST:
        return handleGetEventRequest(state,action);
    case GET_EVENT_SUCCESS:
        return handleGetEventSuccess(state,action);
    case GET_EVENT_FAILURE:
        return handleGetEventFailure(state,action);

    default:
        return state;
    }
}

function handleGetEventRequest(state,action) {
    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function handleGetEventSuccess (state, action) {

    console.log(action.data.isPoll);
    if(action.data.isPoll){
        return update(state, {
            isFetching: { $set: action.isFetching },
            data: { $set: action.data },
            poll: { $set: setPoll(action.data) }
        });
    } else {
        return update(state, {
            isFetching: { $set: action.isFetching },
            data: { $set: action.data }
        });
    }
}

function handleGetEventFailure (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        error: { $set: action.error }
    });
    return newState;
}

function setPoll (event){
    let targets = ['eventWhat','eventWhere','eventWhen'];

    return targets.reduce((pollObject,target,i) => {

        if(event[target].length > 1){
            pollObject[target] = new Array(event[target].length).fill(false);
        }

        return pollObject;

    }, {});
}
