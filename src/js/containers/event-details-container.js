import React from 'react';
import { connect } from 'react-redux';
import EventDetails from '../components/event-details.jsx';

const mapStateToProps = (state) => {
    return {
        eventDetails: state.eventDetails
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleChange: (inputType, event) => {

            dispatch({
                type: "SET_EVENT_DETAILS",
                data: event.target.value,
                inputType: inputType,
                eventType: "eventDetails"
            });
        }
    };
};

const EventDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
