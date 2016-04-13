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
        onChange: (data) => {

            dispatch({
                type: "SET_EVENT_DETAILS",
                data: data
            });
        }
    };
};

const EventDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
