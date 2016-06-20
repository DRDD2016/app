import update from 'react-addons-update';
import { SET_EVENT_DETAILS, SET_EVENT_WHAT, SET_EVENT_WHERE, SET_EVENT_WHEN,
         ADD_INPUT, REMOVE_INPUT,
         NEW_EVENT_REQUEST, NEW_EVENT_SUCCESS, NEW_EVENT_FAILURE, CLEAR_CREATE_EVENT,
         GET_FB_FRIENDS_REQUEST, GET_FB_FRIENDS_SUCCESS, GET_FB_FRIENDS_FAILURE,
         ADD_INVITEE, REMOVE_INVITEE, HYDRATE_CREATE_EVENT } from '../actions/create-event.js';

const initialState = {
    eventDetails: {
        eventName: '',
        eventDescription: '',
        eventNote: ''
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
        return handleFBFriendsRequest(state, action);
    case GET_FB_FRIENDS_SUCCESS:
        return handleFBFriendsSuccess(state, action);
    case GET_FB_FRIENDS_FAILURE:
        return handleFBFriendsFailure(state, action);

    case ADD_INVITEE:
        return addInvitee(state, action);

    case REMOVE_INVITEE:
        return removeInvitee(state, action);

    case HYDRATE_CREATE_EVENT:
        return hydrateCreateEvent(state, action);

    default:
        return state;
    }
}

function handleFBFriendsRequest (state, action) {

    return update(state, {
        isFetching: { $set: action.isFetching }
    });
}

function handleFBFriendsSuccess (state, action) {

    return update(state, {
        isFetching: { $set: action.isFetching },
        friends: { $push: action.data },
    });
}

function handleFBFriendsFailure (state, action) {

    return update(state, {
        isFetching: { $set: action.isFetching },
        error: { $set: action.error }
    });
}

function handleNewEvent (state, action) {

    return update(state, {
        isFetching: { $set: action.isFetching },
        didSave: { $set: action.didSave },
        error: { $set: action.error }
    });
}

function setEventDetails (state, action, key) {

    return update(state, {
        eventDetails: { [action.inputType]: { $set: action.data } }
    });
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

    let initialValue;

    if (action.eventType === 'eventWhen') {

        initialValue = {
            date: state.eventWhen[action.nextInputKey - 1].date,
            time: state.eventWhen[action.nextInputKey - 1].time
        };
    } else {
        initialValue = '';
    }

    let newState = update(state, {
        [action.eventType]: { $push: [initialValue] }
    });
    return newState;
}

function removeInput (state, action) {

    let newState = update(state, {
        [action.eventType]: {  $splice: [[action.inputKey, 1]]  }
    });
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

function hydrateCreateEvent (state, action) {

    let eventDetails = {
        eventName: action.data.eventName,
        eventDescription: action.data.eventDescription,
        eventNote: action.data.eventNote
    };

    let newState = update(state, {
        eventDetails: { $set: eventDetails },
        eventWhat: { $set: action.data.eventWhat },
        eventWhere: { $set: action.data.eventWhere },
        eventWhen: { $set: action.data.eventWhen },
    });
    return newState;
}
