import React from 'react';
import { connect } from 'react-redux';
import { setEventDetails } from '../actions/create-event.js';
import EventDetails from '../components/event-details.jsx';

const mapStateToProps = (state) => {
    return {
        eventDetails: state.eventDetails
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleChange: (inputType, event) => {

            dispatch(setEventDetails(event.target.value, inputType));
        }
    };
};

const EventDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
