import test from 'tape';
import reducer from '../../../../src/js/reducers/create-event.js';


test('Reducer handles ADD_INPUT as expected', (t) => {


    const action = {
        type: "ADD_INPUT",
        eventType: "eventWhen"
    };

    const initialState = {
        eventWhen: [
            {
                date: '',
                time: ''
            }
        ]
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventWhen: [
            {
                date: '',
                time: ''
            },
            {
                date: '',
                time: ''
            }
        ]
    };

    t.deepEqual(nextState, expected, "Reducer adds an element to the eventWhen array");
    /*-----*/
    const action2 = {
        type: "ADD_INPUT",
        eventType: "eventWhere"
    };

    const initialState2 = {
        eventWhere: [
            {
                placeName: '',
                placeAddress: ''
            }
        ]
    };

    const nextState2 = reducer(initialState2, action2);

    const expected2 = {
        eventWhere: [
            {
                placeName: '',
                placeAddress: ''
            },
            ""
        ]
    };

    t.deepEqual(nextState2, expected2, "Reducer adds an element to the eventWhere array");
    t.end();
});

test('Reducer handles REMOVE_INPUT as expected', (t) => {

    const action = {
        type: "REMOVE_INPUT",
        inputKey: 1,
        eventType: "eventWhen"
    };

    const initialState = {
        eventWhen: [
            {
                date: '',
                time: ''
            },
            {
                date: '',
                time: ''
            }
        ]
    };

    const nextState = reducer(initialState, action);

    const expected = {
        eventWhen: [
            {
                date: '',
                time: ''
            }
        ]
    };

    t.deepEqual(nextState, expected, "Reducer removes last element on eventWhen array");
    /*-----*/
    const action2 = {
        type: "REMOVE_INPUT",
        inputKey: 1,
        eventType: "eventWhere"
    };

    const initialState2 = {
        eventWhere: [
            {
                placeName: 'Harrods',
                placeAddress: 'Knightsbridge'
            },
            {
                placeName: 'Founders & Coders',
                placeAddress: 'Bethnal Green'
            },
            {
                placeName: 'Bowling Alley',
                placeAddress: 'Brick Lane'
            }
        ]
    };

    const nextState2 = reducer(initialState2, action2);

    const expected2 = {
        eventWhere: [
            {
                placeName: 'Harrods',
                placeAddress: 'Knightsbridge'
            },
            {
                placeName: 'Bowling Alley',
                placeAddress: 'Brick Lane'
            }
        ]
    };

    t.deepEqual(nextState2, expected2, "Reducer removes middle element in eventWhere array");
    t.end();
})
