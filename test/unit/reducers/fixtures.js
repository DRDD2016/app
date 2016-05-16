import { eventConfirmedHarry } from '../../utils/fixtures.js';

export const calendar = {
    initialState: {
        data: [],
        isFetching: false,
        error: undefined
    },

    statePostRequest: {
        data: [],
        isFetching: true,
        error: undefined
    },

    statePostSuccess: {
        data: [eventConfirmedHarry],
        isFetching: false,
        error: undefined
    },

    statePostFailure: {
        data: [],
        isFetching: false,
        error: {
            message: "Whoops"
        }
    },

    data: [
        eventConfirmedHarry
    ]
};
