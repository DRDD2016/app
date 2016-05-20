import React from 'react';
import { connect } from 'react-redux';
import Event from '../components/event/event.jsx';
import getUserID from '../lib/getUserID.js';
import { getEvent, updatePoll, confirmPoll, addHostEventChoice } from '../actions/event.js';


const mapStateToProps = (state) => {

    return {
        isPoll: state.event.data.isPoll,
        event: state.event.data,
        poll: state.event.poll,
        tally: state.event.tally,
        hostEventChoices: state.event.hostEventChoices,
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

        handleHostEventChoices: (eventType, value, index) => {

            dispatch(addHostEventChoice(eventType, value, index));
        },
        handleEventConfirmation: (hostEventChoices, eventID) => {

            console.log(hostEventChoices, 'host choice', eventID);
        }
    };
};

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);

export default EventContainer;
