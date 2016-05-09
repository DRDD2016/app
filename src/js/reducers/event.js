import update from 'react-addons-update';
import { GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, UPDATE_POLL,
         CONFIRM_POLL_REQUEST, CONFIRM_POLL_SUCCESS, CONFIRM_POLL_FAILURE } from '../actions/event.js';

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
    case UPDATE_POLL:
        return updatePoll(state,action);

    case CONFIRM_POLL_REQUEST:
    case CONFIRM_POLL_SUCCESS:
    case CONFIRM_POLL_FAILURE:
        return handleConfirmPoll(state, action);

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

    if (action.data.isPoll){
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

function setPoll (event) {

    let targets = ['eventWhat','eventWhere','eventWhen'];

    return targets.reduce((pollObject,target,i) => {

        if(event[target].length > 1){
            pollObject[target] = new Array(event[target].length).fill(false);
        }

        return pollObject;

    }, {});
}

function updatePoll (state, action) {

    let newValue = !state.poll[action.eventType][action.index];
    let newState = update(state, {
        poll: { [action.eventType]: {$splice:[[action.index, 1, newValue]]}}
    });
    return newState;
}

function handleConfirmPoll (state, action) {
    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}
