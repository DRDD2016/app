import mergeObjects from '../helpers/merge-objects.js';
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
export default function (state = initialState, action) {

    switch (action.type) {

    case 'SET_EVENT_DETAILS':
        return setEventDetails(state, action);

    case 'SET_EVENT_WHAT':
        return setEvent(state, action);

    case 'SET_EVENT_WHERE':
        return setEvent(state, action);

    case 'SET_EVENT_WHEN':
        return setEventWhen(state, action);

    case 'SET_EVENT_WHEN_TIME':
        return setEvent(state, action);

    case 'ADD_INPUT':
        if(action.eventType === 'eventWhen') {
            return addInputDateTime(state,action);
        } else {
            return addInput(state,action);
        }


    case 'REMOVE_INPUT':
        return removeInput(state, action);

    default:
        return state;
    }
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
    var copy = Object.assign({}, state);
    copy.eventWhen[action.inputKey][action.format] = action.data;
    return copy;
}

function addInput (state, action) {

    return {
        ...state,
        [action.eventType]: {
            ...state[action.eventType],
            [action.nextInputKey]: ''
        }
    };
}
function addInputDateTime (state, action) {

    return {
        ...state,
        [action.eventType]: {
            ...state[action.eventType],
            [action.nextInputKey]: {}
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
