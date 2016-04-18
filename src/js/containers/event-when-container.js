import React from 'react';
import { connect } from 'react-redux';
import EventWhen from '../components/event-when.jsx';

const mapStateToProps = (state) => {
    let data = state.eventWhen || {0:''};
    return {
        eventWhenData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDateTime: (inputKey) => {

            //calculate the timestamp here§
            let timeStamp = 12335;
            dispatch({
                type: "ADD_INPUT",
                nextInputKey: inputKey++,
                eventType: "eventWhen"
            });
            dispatch({
                type: "SET_EVENT_WHEN",
                data: timeStamp,
                inputKey: inputKey,
                eventType: "eventWhen"
            });
        },
        handleEventWhen: (inputKey, event) => {
            dispatch({
                type: "SET_EVENT_WHEN",
                data: event.target.value,
                inputKey: inputKey,
                eventType: "eventWhen"

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
