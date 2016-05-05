import React from 'react';
import { connect } from 'react-redux';
import Event from '../components/event.jsx';
import getUserID from '../lib/getUserID.js';
import { getEvent } from '../actions/event.js';

const mapStateToProps = (state) => {

    let isHost = state.event.hostID === getUserID();
    return {
        isPoll: state.event.isPoll,
        isHost,
        event: state.event,
        isFetching: state.event.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchEvent: (eventID) => {
            dispatch(getEvent(eventID));
        }
    };
};

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);

export default EventContainer;