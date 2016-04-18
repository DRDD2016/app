import test from 'tape';
import reducer from '../../../src/js/reducers/create-event.js';


test('Reducer handles SET_EVENT_DETAILS as expected', (t) => {
    const initialState = {
        eventDetails: {
            eventName: "Sohil Bowling"
        }
    };
    const action = {
        type: 'SET_EVENT_DETAILS',
        data: "We're going bowling!!!",
        inputType: "eventDescription"
    };
    const nextState = reducer(initialState, action);
    const expected = {
        eventDetails: {
            eventName: "Sohil Bowling",
            eventDescription: "We're going bowling!!!"
        }
    };

    t.deepEqual(nextState, expected, 'eventDetails.eventDescription set correctly');
    t.end();
});

test('Reducer handles SET_EVENT_WHAT as expected', (t) => {

    const initialState = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        }
    };

    const action = {
        type: 'SET_EVENT_WHAT',
        data: 'sohil',
        inputKey: 0
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        },
        eventWhat: {0:'sohil'}
    };

    t.deepEqual(nextState, expected, "eventWhat set correctly");
    t.end();
});

test('SET_EVENT_WHERE behaves as expected', (t) => {

    const initialState = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        },
        eventWhat: [
            "Bowling",
            "Swimming"
        ]
    };

    const action = {
        type: 'SET_EVENT_WHERE',
        data: [
            "Shoreditch",
            "South Kensington"
        ]
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        },
        eventWhat: [
            "Bowling",
            "Swimming"
        ],
        eventWhere: [
            "Shoreditch",
            "South Kensington"
        ]
    };

    t.deepEqual(nextState, expected, "eventWhere set correctly");
    t.end();
});

test('SET_EVENT_WHEN behaves as expected', (t) => {

    const initialState = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        },
        eventWhat: [
            "Bowling",
            "Swimming"
        ],
        eventWhere: [
            "Shoreditch",
            "South Kensington"
        ]
    };

    const action = {
        type: "SET_EVENT_WHEN",
        data: [
            1460479400956
        ]
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        },
        eventWhat: [
            "Bowling",
            "Swimming"
        ],
        eventWhere: [
            "Shoreditch",
            "South Kensington"
        ],
        eventWhen: [
            1460479400956
        ]
    };

    t.deepEqual(nextState, expected, "eventWhen set correctly");
    t.end();
});
