import React from 'react';
import { connect } from 'react-redux';
import Event from '../components/event/event.jsx';
import getUserID from '../lib/getUserID.js';
import { getEvent, updatePoll, confirmPoll } from '../actions/event.js';
import { store } from '../init-store.js';

/*
poll info if userIsHost and isPoll - get that before rendering the HostPoll

*/



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
        }
    };
};

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);

export default EventContainer;
