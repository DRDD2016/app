import update from 'react-addons-update';
import { SET_EVENT_DETAILS, SET_EVENT_WHAT, SET_EVENT_WHERE, SET_EVENT_WHEN,
         ADD_INPUT, REMOVE_INPUT,
         NEW_EVENT_REQUEST, NEW_EVENT_SUCCESS, NEW_EVENT_FAILURE, CLEAR_CREATE_EVENT,
         GET_FB_FRIENDS_REQUEST, GET_FB_FRIENDS_SUCCESS, GET_FB_FRIENDS_FAILURE,
         ADD_INVITEE, REMOVE_INVITEE } from '../actions/create-event.js';

const initialState = {
    eventDetails: {
        eventName: '',
        eventDescription: ''
    },
    eventWhat: [''],
    eventWhere: [
        {
            placeName: '',
            placeAddress: ''
        }
    ],
    eventWhen: [
        {
            date: '',
            time: ''
        }
    ],
    friends: [],
    invitees: [],
    isFetching: false,
    error: undefined,
    didSave: undefined,
    isPoll: undefined
};
export default function createEvent  (state = initialState, action) {

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
    case CLEAR_CREATE_EVENT:
        return initialState;

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
    let newState = update(state, {
        [action.eventType]: { $splice: [[action.inputKey, 1, action.data]] }
    });

    return newState;
}

function setEventWhen (state, action) {

    let oldValue = state.eventWhen[action.inputKey];
    let newValue = update(oldValue, {
        [action.format]: { $set: action.data }
    });
    let newState = update(state, {
        'eventWhen': { $splice: [[action.inputKey, 1, newValue]] }
    });
    return newState;
}

function addInput (state, action) {

    let initialEventWhen = {
        date: '',
        time: ''
    };
    let initialValue = (action.eventType === "eventWhen") ? initialEventWhen : '';

    let newState = update(state, {

        [action.eventType]: { $push: [initialValue] }
    });
    return newState;
}

function removeInput (state, action) {

    console.log("allllllll the things", state[action.eventType]);
    console.log("REMOVING YOUUU", state[action.eventType][action.inputIndex]);

    let newState = update(state, {
        [action.eventType]: {  $splice: [[action.inputIndex, 1]]  }
    });
    console.log("AND NOW", newState[action.eventType]);
    return newState;
}

function addInvitee (state, action) {

    let newState = update(state, {
        invitees: { $push: [action.data] },
        friends: { $splice: [[action.index, 1]] }
    });
    return newState;
}

function removeInvitee (state, action) {

    let newState = update(state, {
        friends: { $push: [action.data] },
        invitees: { $splice: [[action.index, 1]] }
    });
    return newState;
}
