import test from 'tape';
import initStore from '../../src/js/init-store.js';
import { setEventDetails, setEventWhat, setEventWhere, setEventWhen } from '../../src/js/actions/create-event.js';
const store = initStore();

test('SET_EVENT_DETAILS action works', (t) => {

    const data = "Jenny's birthday";
    const inputType = "eventName";
    store.dispatch(setEventDetails(data, inputType));

    const expected1 = {
        eventDetails: {
            eventName: "Jenny's birthday",
        },
        eventWhat: { 0: '' },
        eventWhen: {
            0: {
                date: '',
                time: ''
            }
        },
        eventWhere: {
            0: {
                placeName: '',
                placeAddress: ''
            }
        }
    };

    t.deepEqual(store.getState(), expected1, "Action sets data correctly");

    const data2 = "Jenny's getting older!";
    const inputType2 = "eventDescription";
    store.dispatch(setEventDetails(data2, inputType2));

    const expected2 = {
        eventDetails: {
            eventName: "Jenny's birthday",
            eventDescription: "Jenny's getting older!"
        },
        eventWhat: { 0: '' },
        eventWhen: {
            0: {
                date: '',
                time: ''
            }
        },
        eventWhere: {
            0: {
                placeName: '',
                placeAddress: ''
            }
        }
    };

    t.deepEqual(store.getState(), expected2, "Action sets data correctly");
    t.end();
});

test('SET_EVENT_WHAT action works', (t) => {

    const data = "Bowling";
    const inputKey = 0;

    store.dispatch(setEventWhat(data, inputKey));

    const expected = {
        eventDetails: {
            eventName: "Jenny's birthday",
            eventDescription: "Jenny's getting older!"
        },
        eventWhat: { 0: 'Bowling' },
        eventWhen: {
            0: {
                date: '',
                time: ''
            }
        },
        eventWhere: {
            0: {
                placeName: '',
                placeAddress: ''
            }
        }
    };

    t.deepEqual(store.getState(), expected, "Action sets data correctly");
    t.end();
});

test('SET_EVENT_WHERE action works', (t) => {

    const fullAddress = {
        placeName: "FAC",
        placeAddress: "14 Palmers Road"
    };

    const inputKey = 0;

    store.dispatch(setEventWhere(fullAddress, inputKey));

    const expected = {
        eventDetails: {
            eventName: "Jenny's birthday",
            eventDescription: "Jenny's getting older!"
        },
        eventWhat: { 0: 'Bowling' },
        eventWhen: {
            0: {
                date: '',
                time: ''
            }
        },
        eventWhere: {
            0: {
                placeName: 'FAC',
                placeAddress: '14 Palmers Road'
            }
        }
    };

    t.deepEqual(store.getState(), expected, "Action sets data correctly");
    t.end();
});

test('SET_EVENT_WHEN action works', (t) => {

    let data = "31/12/2016";
    let inputKey = 0;
    let format = "date";

    store.dispatch(setEventWhen(data,inputKey, format));

    const expected1 = {
        eventDetails: {
            eventName: "Jenny's birthday",
            eventDescription: "Jenny's getting older!"
        },
        eventWhat: { 0: 'Bowling' },
        eventWhen: {
            0: {
                date: '31/12/2016',
                time: ''
            }
        },
        eventWhere: {
            0: {
                placeName: 'FAC',
                placeAddress: '14 Palmers Road'
            }
        }
    };

    t.deepEqual(store.getState(), expected1, "Reducer sets `eventDetails.eventName` correctly");

    let data2 = "12:00";
    let inputKey2 = 0;
    let format2 = "time";

    store.dispatch(setEventWhen(data2, inputKey2, format2));

    const expected2 = {
        eventDetails: {
            eventName: "Jenny's birthday",
            eventDescription: "Jenny's getting older!"
        },
        eventWhat: { 0: 'Bowling' },
        eventWhen: {
            0: {
                date: '31/12/2016',
                time: '12:00'
            }
        },
        eventWhere: {
            0: {
                placeName: 'FAC',
                placeAddress: '14 Palmers Road'
            }
        }
    };

    t.deepEqual(store.getState(), expected2, "Action for SetEventWhen being dispatched correctly");
    t.end();
});
