import React from 'react';
import { connect } from 'react-redux';
import EventWhere from '../components/event-where.jsx';

const mapStateToProps = (state) => {
    let data = state.eventWhere || {0:''};
    return {
        eventWhereData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhere: (inputKey, event) => {
            dispatch({
                type: "SET_EVENT_WHERE",
                data: event.target.value,
                inputKey: inputKey,
                eventType: "eventWhere"

            });
        },

        addInput: (nextInputKey) => {
            dispatch({
                type: "ADD_INPUT",
                nextInputKey: nextInputKey,
                eventType: "eventWhere"
            });
        },

        removeInput: () => {
            dispatch({
                type: "REMOVE_INPUT",
                eventType: "eventWhere"
            });
        }
    };
};

const EventWhereContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhere);

export default EventWhereContainer;
