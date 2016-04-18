import test from 'tape';
import initStore from '../../src/js/init-store.js';

const store = initStore();

test('SET_EVENT_DETAILS action works', (t) => {

    store.dispatch({
        type: "SET_EVENT_DETAILS",
        data: "Jenny's birthday",
        inputType: "eventName",
        eventType: "eventDetails"
    });

    const expected1 = {
        eventDetails: {
            eventName: "Jenny's birthday",
        }, eventWhat: { 0: '' }, eventWhen: { 0: { date: '', time: '' } }, eventWhere: { 0: '' }
    };

    t.deepEqual(store.getState(), expected1, "Reducer sets `eventDetails.eventName` correctly");

    store.dispatch({
        type: "SET_EVENT_DETAILS",
        data: "Jenny's getting older!",
        inputType: "eventDescription",
        eventType: "eventDetails"

    });

    const expected2 = {
        eventDetails: {
            eventName: "Jenny's birthday",
            eventDescription: "Jenny's getting older!"
        }, eventWhat: { 0: '' }, eventWhen: { 0: { date: '', time: '' } }, eventWhere: { 0: '' }
    };

    t.deepEqual(store.getState(), expected2, "Reducer sets `eventDetails.eventDescription` correctly");
    t.end();
});
