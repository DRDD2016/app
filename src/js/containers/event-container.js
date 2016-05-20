import React from 'react';
import { connect } from 'react-redux';
import Event from '../components/event/event.jsx';
import getUserID from '../lib/getUserID.js';
import { getEvent, updatePoll, confirmPoll } from '../actions/event.js';


const mapStateToProps = (state) => {

    return {
        isPoll: state.event.data.isPoll,
        event: state.event.data,
        poll: state.event.poll,
        tally: state.event.tally,
        isFetching: state.event.isFetching,
        userIsHost: state.event.data.hostID == getUserID()
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchEvent: (eventID) => {

            dispatch(getEvent(eventID));
        },

        toggleSelection: (eventType, index) => {

            dispatch(updatePoll(eventType, index));
        },

        handlePollConfirmation: (poll, eventID) => {

            dispatch(confirmPoll(poll, eventID));
        },

        confirmEvent: (eventType, value, index) => {
            //dispatch in the future
            // dispatch(confirmedEventSelection(eventType, choice, index))
        }
    };
};

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);

export default EventContainer;
