import update from 'react-addons-update';
import { GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, UPDATE_POLL,
         CONFIRM_POLL_REQUEST, CONFIRM_POLL_SUCCESS, CONFIRM_POLL_FAILURE, ADD_HOST_EVENT_CHOICE,
         CONFIRM_EVENT_REQUEST, CONFIRM_EVENT_SUCCESS, CONFIRM_EVENT_FAILURE,
         UPDATE_RSVP_REQUEST, UPDATE_RSVP_SUCCESS, UPDATE_RSVP_FAILURE,
         DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE,
         SAVE_EDITED_EVENT_REQUEST, SAVE_EDITED_EVENT_SUCCESS, SAVE_EDITED_EVENT_FAILURE } from '../actions/event.js';

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
        return handleFailure(state, action);

    case UPDATE_POLL:
        return updatePoll(state, action);

    case CONFIRM_POLL_REQUEST:
    case CONFIRM_POLL_SUCCESS:
        return handleConfirmPoll(state, action);
    case CONFIRM_POLL_FAILURE:
        return handleFailure(state, action);

    case ADD_HOST_EVENT_CHOICE:
        return addHostEventChoice(state, action);

    case CONFIRM_EVENT_REQUEST:
    case CONFIRM_EVENT_SUCCESS:
        return handleConfirmEvent(state, action);
    case CONFIRM_EVENT_FAILURE:
        return handleFailure(state, action);

    case UPDATE_RSVP_REQUEST:
        return handleRequest(state, action);
    case UPDATE_RSVP_SUCCESS:
        return handleRSVPSuccess(state, action); // TO REFACTOR
    case UPDATE_RSVP_FAILURE:
        return handleFailure(state, action);

    case DELETE_EVENT_REQUEST:
    case DELETE_EVENT_SUCCESS:
        return handleDeleteEvent(state, action);
    case DELETE_EVENT_FAILURE:
        return handleFailure(state, action);

    case SAVE_EDITED_EVENT_REQUEST:
    case SAVE_EDITED_EVENT_SUCCESS:
        return handleRequest(state, action);
    case SAVE_EDITED_EVENT_FAILURE:
        return handleFailure(state, action);

    default:
        return state;
    }
}

function handleRequest (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function handleRSVPSuccess (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        RSVPs: { $set: action.data }
    });
    return newState;
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
        hostEventChoices: { $set: hostEventChoices },
        RSVPs: { $set: action.data.RSVPs },
        invitees: { $set: action.data.invitees }
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

function handleDeleteEvent (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function handleFailure (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        error: { $set: action.error }
    });
    return newState;
}
