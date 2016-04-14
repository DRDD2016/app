import React from 'react';
import { connect } from 'react-redux';
import EventWhat from '../components/event-what.jsx';

const mapStateToProps = (state) => {
    let data = state.eventWhat || {0:''};
    return {
        eventWhatData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhat: (inputKey, event) => {
            dispatch({
                type: "SET_EVENT_WHAT",
                data: event.target.value,
                inputKey: inputKey
            });
        },

        addInput: (nextInputKey) => {
            dispatch({
                type: "ADD_INPUT",
                nextInputKey: nextInputKey
            });
        },

        removeInput: () => {
            dispatch({
                type: "REMOVE_INPUT"
            });
        }
    };
};

const EventWhatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhat);

export default EventWhatContainer;
