import React from 'react';
import { connect } from 'react-redux';
import { setEventWhen, addInput, removeInput } from '../actions/create-event.js';
import EventWhen from '../components/event-when.jsx';

const mapStateToProps = (state) => {

    let data = state.eventWhen;
    console.log(data, '------ top level ======');
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
            dispatch(addInput(nextInputKey));
        },



        removeInput: () => {
            dispatch(removeInput(nextInputKey));
        }
    };
};

const EventWhenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhen);

export default EventWhenContainer;
