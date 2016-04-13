import test from 'tape';
import reducer from '../../../src/js/reducers/create-event.js';


test('SET_EVENT_DETAILS behaves as expected', (t) => {
    const initialState = {};
    const action = {
        type: 'SET_EVENT_DETAILS',
        data: {
             eventName:"Sohil Bowling",
             eventDescription:"Bowling"
        }
    };
    const nextState = reducer(initialState, action);
    const expected = {
        eventDetails: {
             eventName:"Sohil Bowling",
             eventDescription:"Bowling"
         }
    };

    t.deepEqual(nextState, expected, 'SET_EVENT_DETAILS RETURNS CORRECT DATA FROM REDUCER');
    t.end();
});

test('SET_EVENT_WHAT behaves as expected', (t) => {

    const initialState = {
        eventDetails: {
             eventName:"Sohil Bowling",
             eventDescription:"Bowling"
        }
    };

    const action = {
        type: 'SET_EVENT_WHAT',
        data: [
            "Bowling",
            "Swimming"
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
        ]
    };

    t.deepEqual(nextState, expected, "SET_EVENT_WHAT returns correct state from reducer");
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

    t.deepEqual(nextState, expected, "SET_EVENT_WHERE returns correct state from reducer");
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

    t.deepEqual(nextState, expected, "SET_EVENT_WHEN returns correct state from reducer");
    t.end();
});
