import test from 'tape';
import initStore from '../../src/js/init-store.js';

const store = initStore();

test('SET_EVENT_DETAILS dispatches correctly', (t) => {

    store.dispatch({
        type: "SET_EVENT_DETAILS",
        data: {
            eventName: "Jenny's birthday",
            eventDescription: "I'm getting older!"
        }
    });

    const expected = {
        eventDetails: {
            eventName: "Jenny's birthday",
            eventDescription: "I'm getting older!"
        }
    };

    t.deepEqual(store.getState(), expected, "Reducer handles SET_EVENT_DETAILS correctly");
    t.end();
});
