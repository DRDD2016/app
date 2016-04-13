export default function (state = {}, action) {

    let key;
    switch (action.type) {

    case 'SET_EVENT_DETAILS':
        key = "eventDetails";
        return setEventDetails(state, action, key);

    case 'SET_EVENT_WHAT':
        key = "eventWhat";
        return setEvent(state, action, key);

    case 'SET_EVENT_WHERE':
        key = "eventWhere";
        return setEvent(state, action, key);

    case 'SET_EVENT_WHEN':
        key = "eventWhen";
        return setEvent(state, action, key);

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

function setEvent (state, action, key) {

    return {
        ...state,
        [key]: action.data
    };
}
