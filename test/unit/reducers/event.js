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
        poll: undefined,
        tally: undefined,
        hostEventChoices: undefined

    };
    const data = {
        event: {
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
        poll: {
            eventWhat: [false, false],
            eventWhere: [false, false]
        }
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
            eventWhat: [false, false],
            eventWhere: [false, false]
        },
        tally: undefined,
        hostEventChoices: {}

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

test('Reducer handles UPDATE_POLL as expected', (t) => {

    const initialState = {
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
            eventWhere: [false, false],
            eventWhen: [false],
        }
    };
    const action = {
        type: 'UPDATE_POLL',
        eventType: 'eventWhere',
        index: 1
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
            eventWhere: [false, true],
            eventWhen: [false],
        }
    };

    t.deepEqual(actual, expected);
    t.end();
});

test('Reducer handles CONFIRM_POLL_REQUEST as expected', (t) => {

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
        type: "CONFIRM_POLL_REQUEST",
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

test('Reducer handles CONFIRM_POLL_SUCCESS as expected', (t) => {

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
    const action = {
        type: "CONFIRM_POLL_SUCCESS",
        isFetching: false
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {},
        isFetching: false,
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

test('Reducer handles CONFIRM_POLL_FAILURE as expected', (t) => {

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
    const action = {
        type: "CONFIRM_POLL_FAILURE",
        isFetching: false
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {},
        isFetching: false,
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

test('reducer handles HOST_EVENT_CHOICES as expected', (t) => {

    const initialState = {
        data: {},
        isFetching: false,
        error: undefined,
        poll: undefined,
        tally: undefined,
        hostEventChoices: {
            eventWhat: '',
            eventWhere: '',
            eventWhen: ''
        }
    };

    const action = {
        type: "HOST_EVENT_CHOICES",
        eventType: 'eventWhat',
        value: 'Sohil Birthday',
        index: 0
    };

    const actual = reducer(initialState, action);
    const expected = {
        data: {},
        isFetching: false,
        error: undefined,
        poll: undefined,
        tally: undefined,
        hostEventChoices: {
            eventWhat: 'Sohil Birthday',
            eventWhere: '',
            eventWhen: ''
        }
    };

    t.deepEqual(actual, expected);

    const initialState2 = {
        data: {},
        isFetching: false,
        error: undefined,
        poll: undefined,
        tally: undefined,
        hostEventChoices: {
            eventWhat: 'Sohil Birthday',
            eventWhere: '',
            eventWhen: ''
        }
    };




    const action2 = {
        type: "HOST_EVENT_CHOICES",
        eventType: 'eventWhere',
        value: {
            placeName: "1 Oxford St", placeAddress: "1 Oxford St, London WC1A 1GG, UK"
        },
        index: 0
    };


    const actual2 = reducer(initialState2, action2);
    const expected2 = {
        data: {},
        isFetching: false,
        error: undefined,
        poll: undefined,
        tally: undefined,
        hostEventChoices: {
            eventWhat: 'Sohil Birthday',
            eventWhere: {
                placeName: "1 Oxford St", placeAddress: "1 Oxford St, London WC1A 1GG, UK"
            },
            eventWhen: ''
        }
    };

    t.deepEqual(actual2, expected2);
    t.end();

});
