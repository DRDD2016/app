import { SET_EVENT_DETAILS, SET_EVENT_WHAT, SET_EVENT_WHERE, SET_EVENT_WHEN,
         ADD_INPUT, REMOVE_INPUT,
         NEW_EVENT, NEW_EVENT_REQUEST, NEW_EVENT_SUCCESS, NEW_EVENT_FAILURE } from '../actions/create-event.js';

const initialState = {
    eventDetails: {

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
        0: {
            date: '',
            time: ''
        }
    }
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

    case NEW_EVENT:
    case NEW_EVENT_SUCCESS:
    case NEW_EVENT_FAILURE:
        return doSomething(state);

    default:
        return state;
    }
}

function doSomething (state) {
    console.log("something is happening!");
    return state;
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

    let newState = Object.assign(
        {},
        state,
        { [action.eventType]: [action.inputKey] }
    );
    newState[action.eventType][action.inputKey] = action.data;

    return newState;
}

function setEventWhen (state, action) {

    let newState = Object.assign({}, state);
    newState.eventWhen[action.inputKey][action.format] = action.data;
    
    return newState;
}

function addInput (state, action) {

    let initialValue = (action.eventType === "eventWhen") ? {} : '';

    let newState = Object.assign({}, state);
    newState[action.eventType][action.nextInputKey] = initialValue;

    return newState;
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
