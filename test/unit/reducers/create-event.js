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
        inputType: "eventDescription",
        eventType: "eventDetails"
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
        inputKey: 0,
        eventType: "eventWhat",
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        },
        eventWhat: { 0: 'sohil' }
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
        eventWhat: {
            0:"Bowling",
            1:"Swimming"
        },
        eventWhere: {
            0: {
                placeName: "",
                placeAddress: ""
            }
        }
    };

    const action = {
        type: 'SET_EVENT_WHERE',
        data: {
            "placeName": "Founders & Coders",
            "placeAddress": "123 Fake Street, London"
        },
        eventType: "eventWhere",
        inputKey: 0
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventDetails: {
            eventName: "Sohil Bowling",
            eventDescription: "Bowling"
        },
        eventWhat: {
            0: "Bowling",
            1: "Swimming"
        },
        eventWhere: {
            0: {
                "placeName": "Founders & Coders",
                "placeAddress": "123 Fake Street, London"
            }
        }
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
        eventWhat: {
            0:"Bowling",
            1:"Swimming"
        },
        eventWhere: {
            0:"sohil",
            1:"Shoreditch"
        },
        eventWhen: {
            0: {}
        }
    };

    const action = {
        type: "SET_EVENT_WHEN",
        data: "1460479400956",
        eventType: "eventWhen",
        inputKey: 0,
        format: "time"
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventDetails: {
            eventName:"Sohil Bowling",
            eventDescription:"Bowling"
        },
        eventWhat: {
            0:"Bowling",
            1:"Swimming"
        },
        eventWhere: {
            0:"sohil",
            1:"Shoreditch"
        },
        eventWhen: {
            0: {
                time: '1460479400956'
            }
        }
    };

    t.deepEqual(nextState, expected, "eventWhen set correctly");
    t.end();
});
