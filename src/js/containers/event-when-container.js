import React from 'react';
import { connect } from 'react-redux';
import EventWhen from '../components/event-when.jsx';

const mapStateToProps = (state) => {

    const initialState = {
        0: {
            date: '',
            time: ''
        }
    };

    let data = state.eventWhen || initialState;

    return {
        eventWhenData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleDate: (inputKey, event) => {
            console.log("handleDate", event.target.value);

            dispatch({
                type: "SET_EVENT_WHEN",
                data: event.target.value,
                inputKey: inputKey,
                eventType: "eventWhen",
                format: "date"
            });
        },

        handleTime: (inputKey, event) => {
            console.log("handleTime", event.target.value);
            dispatch({
                type: "SET_EVENT_WHEN",
                data: event.target.value,
                inputKey: inputKey,
                eventType: "eventWhen",
                format: "time"
            });
        },

        addInput: (nextInputKey) => {
            dispatch({
                type: "ADD_INPUT",
                nextInputKey: nextInputKey,
                eventType: "eventWhen"
            });
        },

        removeInput: () => {
            dispatch({
                type: "REMOVE_INPUT",
                eventType: "eventWhen"
            });
        }
    };
};

const EventWhenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhen);

export default EventWhenContainer;
