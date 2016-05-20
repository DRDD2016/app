import update from 'react-addons-update';
import { GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, UPDATE_POLL,
         CONFIRM_POLL_REQUEST, CONFIRM_POLL_SUCCESS, CONFIRM_POLL_FAILURE, HOST_EVENT_CHOICES } from '../actions/event.js';

const initialState = {
    data: {},
    isFetching: false,
    error: undefined,
    poll: undefined,
    tally: undefined,
    hostEventChoices: undefined
};

export default function event (state = initialState, action) {

    switch (action.type) {

    case GET_EVENT_REQUEST:
        return handleGetEventRequest(state, action);
    case GET_EVENT_SUCCESS:
        return handleGetEventSuccess(state, action);
    case GET_EVENT_FAILURE:
        return handleGetEventFailure(state, action);
    case UPDATE_POLL:
        return updatePoll(state, action);

    case CONFIRM_POLL_REQUEST:
    case CONFIRM_POLL_SUCCESS:
    case CONFIRM_POLL_FAILURE:
        return handleConfirmPoll(state, action);

    case HOST_EVENT_CHOICES:
        return hostEventChoices(state, action);

    default:
        return state;
    }
}

function handleGetEventRequest (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function handleGetEventSuccess (state, action) {
    let hostEventChoices = {};
    if (action.data.tally) {
        Object.keys(action.data.tally).forEach((eventType, i) => {
            hostEventChoices[eventType] = '';
        });
    }
    let newState = update(state, {

        isFetching: { $set: action.isFetching },
        data: { $set: action.data.event },
        tally: { $set: action.data.tally },
        poll: { $set: action.data.poll },
        hostEventChoices: { $set: hostEventChoices }
    });
    return newState;
}

function handleGetEventFailure (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        error: { $set: action.error }
    });
    return newState;
}

function setPoll (event) {

    let targets = ['eventWhat', 'eventWhere', 'eventWhen'];

    return targets.reduce((pollObject, target, i) => {

        if (event[target].length > 1) {
            pollObject[target] = new Array(event[target].length).fill(false);
        }

        return pollObject;

    }, {});
}

function updatePoll (state, action) {

    let newValue = !state.poll[action.eventType][action.index];
    let newState = update(state, {
        poll: { [action.eventType]: { $splice: [[action.index, 1, newValue]] } }
    });
    return newState;
}

function handleConfirmPoll (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function hostEventChoices (state, action) {
    let newState = update(state, {
        hostEventChoices: { [action.eventType]: { $set: action.value } }
    });
    return newState;
}
