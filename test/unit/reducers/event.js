import test from 'tape';
import reducer from '../../../src/js/reducers/event.js';


test('Reducer handles GET_EVENT_REQUEST as expected', (t) => {

    const initialState = {
        data: {},
        isFetching: false,
        error: undefined,
        poll: {
            eventWhat: [],
            eventWhere: [],
            eventWhen: [],
        }
    };
    const action = {
        type: "GET_EVENT_REQUEST",
        isFetching: true
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {},
        isFetching: true,
        error: undefined,
        poll: {
            eventWhat: [],
            eventWhere: [],
            eventWhen: [],
        }
    };

    t.deepEqual(actual, expected);
    t.end();
});

test('Reducer handles GET_EVENT_SUCCESS is as expected with isPoll set to true', (t) => {

    const initialState = {
        data: {},
        isFetching: true,
        error: undefined,
        poll: {
            eventWhat: [],
            eventWhere: [],
            eventWhen: [],
        }
    };
    const data = {
        eventName: "sohil",
        eventDescription: "Birthday",
        isPoll: true,
        eventWhat: [
            "birthday party",
            "bowling"
        ],
        eventWhere: [
            {
                placeName: "harrods",
                placeAddress: "knightsbridge"
            },
            {
                placeName: "FAC",
                placeAddress: "E2 0SY"
            }
        ],
        eventWhen: [
            {
                date: "2016-12-12",
                time: "10:10"
            }
        ]
    };
    const action = {
        type: "GET_EVENT_SUCCESS",
        isFetching: false,
        data: data
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {
            eventName: "sohil",
            eventDescription: "Birthday",
            isPoll: true,
            eventWhat: [
                "birthday party",
                "bowling"
            ],
            eventWhere: [
                {
                    placeName: "harrods",
                    placeAddress: "knightsbridge"
                },
                {
                    placeName: "FAC",
                    placeAddress: "E2 0SY"
                }
            ],
            eventWhen: [
                {
                    date: "2016-12-12",
                    time: "10:10"
                }
            ]
        },
        isFetching: false,
        error: undefined,
        poll: {
            eventWhat: [false,false],
            eventWhere: [false,false]
        }
    };

    t.deepEqual(actual, expected, "Event is fetched successfully");
    t.end();

});

test('Reducer handles GET_EVENT_SUCCESS as expected with isPoll set to false', (t) => {

    const initialState = {
        data: {},
        isFetching: true,
        error: undefined,
        poll: {
            eventWhat: [],
            eventWhere: [],
            eventWhen: [],
        }
    };
    const data = {
        eventName: "sohil",
        eventDescription: "Birthday",
        isPoll: false,
        eventWhat: [
            "birthday party",
            "bowling"
        ],
        eventWhere: [
            {
                placeName: "harrods",
                placeAddress: "knightsbridge"
            },
            {
                placeName: "FAC",
                placeAddress: "E2 0SY"
            }
        ],
        eventWhen: [
            {
                date: "2016-12-12",
                time: "10:10"
            }
        ]
    };
    const action = {
        type: "GET_EVENT_SUCCESS",
        isFetching: false,
        data: data
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {
            eventName: "sohil",
            eventDescription: "Birthday",
            isPoll: false,
            eventWhat: [
                "birthday party",
                "bowling"
            ],
            eventWhere: [
                {
                    placeName: "harrods",
                    placeAddress: "knightsbridge"
                },
                {
                    placeName: "FAC",
                    placeAddress: "E2 0SY"
                }
            ],
            eventWhen: [
                {
                    date: "2016-12-12",
                    time: "10:10"
                }
            ]
        },
        isFetching: false,
        error: undefined,
        poll: {
            eventWhat: [],
            eventWhere: [],
            eventWhen: [],
        }
    };

    t.deepEqual(actual, expected, "Event is fetched successfully");
    t.end();

});

test('Reducer handles GET_EVENT_FAILURE as expected', (t) => {

    const initialState = {
        data: {},
        isFetching: true,
        error: undefined
    };
    const error = {
        message: "There was an error..."
    };
    const action = {
        type: "GET_EVENT_FAILURE",
        isFetching: false,
        error: error
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {},
        isFetching: false,
        error: {
            message: "There was an error..."
        }
    };

    t.deepEqual(actual, expected);
    t.end();
});
