export default function (state = {}, action) {

    let key;
    switch (action.type) {

    case 'SET_EVENT_DETAILS':
        key = "eventDetails";
        return setEventDetails(state, action, key);

    case 'SET_EVENT_WHAT':
        key = "eventWhat";
        return setEventWhat(state, action, key);

    case 'SET_EVENT_WHERE':
        key = "eventWhere";
        return setEvent(state, action, key);

    case 'SET_EVENT_WHEN':
        key = "eventWhen";
        return setEvent(state, action, key);

    case 'ADD_INPUT':
        return addInput(state, action);

    case 'REMOVE_INPUT':
        return removeInput(state, action);

    default:
        return state;
    }
}

function setEventDetails (state, action, key) {

    return {
        ...state,
        [key]: {
            ...state.eventDetails,
            [action.inputType]: action.data
        }
    };
}

function setEventWhat (state, action, key) {

    return {
        ...state,
        [key]: {
            ...state.eventWhat,
            [action.inputKey]: action.data
        }
    };
}

function setEvent (state, action, key) {

    return {
        ...state,
        [key]: action.data
    };
}

function addInput (state, action) {

    return {
        ...state,
        eventWhat: {
            ...state.eventWhat,
            [action.nextInputKey]: ''
        }
    };
}

function removeInput (state, action) {

    const keys = Object.keys(state.eventWhat);
    let newState = {};
    for (let i = 0; i < keys.length - 1; i++) {

        newState[i] = state.eventWhat[i];
    }
    return {
        ...state,
        eventWhat: newState
    };
}
