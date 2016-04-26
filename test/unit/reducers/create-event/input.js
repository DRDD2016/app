import test from 'tape';
import reducer from '../../../../src/js/reducers/create-event.js';


test('Reducer handles ADD_INPUT as expected', (t) => {


    const action = {
        type: "ADD_INPUT",
        nextInputKey: 1,
        eventType: "eventWhen"
    };

    const initialState = {
        eventWhen: {
            0:{
                date: '',
                time: ''
            }
        }
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventWhen: {
            0:{
                date: '',
                time: ''
            },
            1:{}
        }
    };

    t.deepEqual(nextState, expected, "eventWhen adds incremented key; value as empty object");
    /*-----*/
    const action2 = {
        type: "ADD_INPUT",
        nextInputKey: 1,
        eventType: "eventWhere"
    };

    const initialState2 = {
        eventWhere: {
            0:{
                placeName: '',
                placeAddress: ''
            }
        }
    };

    const nextState2 = reducer(initialState2, action2);

    const expected2 = {
        eventWhere: {
            0:{
                placeName: '',
                placeAddress: ''
            },
            1:""
        }
    };

    t.deepEqual(nextState2, expected2, "eventWhere adds incremented key; value as empty string");
    t.end();
});

test('Reducer handles REMOVE_INPUT as expected', (t) => {

    const action = {
        type: "REMOVE_INPUT",
        nextInputKey: 1,
        eventType: "eventWhen"
    };

    const initialState = {
        eventWhen: {
            0:{
                date: '',
                time: ''
            },
            1:{}
        }
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventWhen: {
            0:{
                date: '',
                time: ''
            }
        }
    };

    t.deepEqual(nextState, expected, "eventWhen removes last key");
    /*-----*/
    const action2 = {
        type: "REMOVE_INPUT",
        nextInputKey: 1,
        eventType: "eventWhere"
    };

    const initialState2 = {
        eventWhere: {
            0:{
                placeName: '',
                placeAddress: ''
            },
            1:""
        }
    };

    const nextState2 = reducer(initialState2, action2);

    const expected2 = {
        eventWhere: {
            0:{
                placeName: '',
                placeAddress: ''
            }
        }
    };

    t.deepEqual(nextState2, expected2, "eventWhere removes last key");
    t.end();
})
