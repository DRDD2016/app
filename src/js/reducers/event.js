import update from 'react-addons-update';
import { GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, UPDATE_POLL,
         CONFIRM_POLL_REQUEST, CONFIRM_POLL_SUCCESS, CONFIRM_POLL_FAILURE, ADD_HOST_EVENT_CHOICE,
         CONFIRM_EVENT_REQUEST, CONFIRM_EVENT_SUCCESS, CONFIRM_EVENT_FAILURE,
         UPDATE_RSVP_REQUEST, UPDATE_RSVP_SUCCESS, UPDATE_RSVP_FAILURE } from '../actions/event.js';

const initialState = {
    data: {},
    isFetching: false,
    error: undefined,
    poll: undefined,
    tally: undefined,
    hostEventChoices: undefined,
    invitees: undefined,
    RSVPs: undefined
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

    case ADD_HOST_EVENT_CHOICE:
        return addHostEventChoice(state, action);

    case CONFIRM_EVENT_REQUEST:
    case CONFIRM_EVENT_SUCCESS:
    case CONFIRM_EVENT_FAILURE:
        return handleConfirmEvent(state, action);

    case UPDATE_RSVP_REQUEST:
    case UPDATE_RSVP_SUCCESS:
    case UPDATE_RSVP_FAILURE:
        return handleConfirmEvent(state, action); // TO REFACTOR

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
    let hostEventChoices;

    if (action.data.tally) {
        hostEventChoices = {};
        Object.keys(action.data.tally).forEach((eventType, i) => {
            hostEventChoices[eventType] = '';
        });
    }

    let newState = update(state, {

        isFetching: { $set: action.isFetching },
        data: { $set: action.data.event },
        tally: { $set: action.data.tally },
        poll: { $set: action.data.poll },
        hostEventChoices: { $set: action.data.hostEventChoices },
        RSVPs: { $set: action.data.RSVPs },
        invitees: { $set: action.data.invitees }
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

function addHostEventChoice (state, action) {
    let newState = update(state, {
        hostEventChoices: { [action.eventType]: { $set: action.index } }
    });
    return newState;
}

function handleConfirmEvent (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}
