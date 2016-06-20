import React from 'react';
import { connect } from 'react-redux';
import { setEventWhen, addInput, removeInput } from '../../actions/create-event.js';
import EventWhen from '../../components/create-event/event-when.jsx';

const mapStateToProps = (state) => {

    let data = state.createEvent.eventWhen;
    return {
        eventWhenData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleDate: (inputKey, event) => {

            dispatch(setEventWhen(event.target.value, inputKey, "date"));
        },

        handleTime: (inputKey, event) => {

            dispatch(setEventWhen(event.target.value, inputKey, "time"));
        },

        addInput: (nextInputKey) => {
            dispatch(addInput(nextInputKey, "eventWhen"));
        },

        removeInput: (lastInputKey) => {
            dispatch(removeInput(lastInputKey, "eventWhen"));
        }
    };
};

const EventWhenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhen);

export default EventWhenContainer;
