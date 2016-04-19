import React from 'react';
import { connect } from 'react-redux';
import EventWhen from '../components/event-when.jsx';

const mapStateToProps = (state) => {

    let data = state.eventWhen;

    return {
        eventWhenData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleDate: (inputKey, event) => {

            dispatch({
                type: "SET_EVENT_WHEN",
                data: event.target.value,
                inputKey: inputKey,
                eventType: "eventWhen",
                format: "date"
            });
        },

        handleTime: (inputKey, event) => {
            
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
