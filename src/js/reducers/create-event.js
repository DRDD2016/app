import update from 'react-addons-update';
import { SET_EVENT_DETAILS, SET_EVENT_WHAT, SET_EVENT_WHERE, SET_EVENT_WHEN,
         ADD_INPUT, REMOVE_INPUT,
         NEW_EVENT_REQUEST, NEW_EVENT_SUCCESS, NEW_EVENT_FAILURE,
         GET_FB_FRIENDS_REQUEST, GET_FB_FRIENDS_SUCCESS, GET_FB_FRIENDS_FAILURE,
         ADD_INVITEE, REMOVE_INVITEE } from '../actions/create-event.js';

const initialState = {
    eventDetails: {
        eventName: '',
        eventDescription: ''
    },
    eventWhat: {
        0:''
    },
    eventWhere: {
        0: {
            placeName: '',
            placeAddress: ''
        }
    },
    eventWhen: {
        0:{
            date: '',
            time: ''
        }
    },
    friends: [],
    invitees: [],
    isFetching: false,
    error: undefined,
    didSave: undefined
};
export default function createEvent(state = initialState, action) {

    switch (action.type) {

    case SET_EVENT_DETAILS:
        return setEventDetails(state, action);

    case SET_EVENT_WHAT:
    case SET_EVENT_WHERE:
        return setEvent(state, action);

    case SET_EVENT_WHEN:
        return setEventWhen(state, action);

    case ADD_INPUT:
        return addInput(state, action);

    case REMOVE_INPUT:
        return removeInput(state, action);

    case NEW_EVENT_REQUEST:
    case NEW_EVENT_SUCCESS:
    case NEW_EVENT_FAILURE:
        return handleNewEvent(state, action);

    case GET_FB_FRIENDS_REQUEST:
    case GET_FB_FRIENDS_SUCCESS:
    case GET_FB_FRIENDS_FAILURE:
        return handleFBFriends(state, action);

    case ADD_INVITEE:
        return addInvitee(state, action);

    case REMOVE_INVITEE:
        return removeInvitee(state, action);

    default:
        return state;
    }
}


function handleFBFriends (state, action) {
    return {
        ...state,
        isFetching: action.isFetching,
        friends: action.data,
        error: action.error
    };
}

function handleNewEvent (state, action) {
    return {
        ...state,
        isFetching: action.isFetching,
        didSave: action.didSave,
        error: action.payload
    };
}

function setEventDetails (state, action, key) {

    return {
        ...state,
        [action.eventType]: {
            ...state.eventDetails,
            [action.inputType]: action.data
        }
    };
}

function setEvent (state, action) {

    return {
        ...state,
        [action.eventType]: {
            ...state[action.eventType],
            [action.inputKey]: action.data
        }
    };
}

function setEventWhen (state, action) {

    let newState = update(state, {
        eventWhen: {[action.inputKey]: {[action.format]: {$set: action.data}}}
    });
    return newState;
}

function addInput (state, action) {

    let initialValue = (action.eventType === "eventWhen") ? {} : '';

    return {
        ...state,
        [action.eventType]: {
            ...state[action.eventType],
            [action.nextInputKey]: initialValue
        }
    };
}

function removeInput (state, action) {

    const keys = Object.keys(state[action.eventType]);
    let newState = {};

    for (let i = 0; i < keys.length - 1; i++) {

        newState[i] = state[action.eventType][i];
    }
    return {
        ...state,
        [action.eventType]: newState
    };
}

function addInvitee (state, action) {

    let newState = update(state, {
        invitees: {$push: [action.data]},
        friends: {$splice: [[action.index, 1]]}
    });
    return newState;
}

function removeInvitee (state, action) {

    let newState = update(state, {
        friends: {$push: [action.data]},
        invitees: {$splice: [[action.index, 1]]}
    });
    return newState;
}
