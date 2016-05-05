import React from 'react';
import { connect } from 'react-redux';
import { getFBFriends, setEventDetails } from '../../actions/create-event.js';
import EventDetails from '../../components/create-event/event-details.jsx';

const mapStateToProps = (state) => {
    let shouldGetFBFriends = state.createEvent.invitees.length === 0 && state.createEvent.friends.length === 0;
    return {
        eventDetails: state.createEvent.eventDetails,
        shouldGetFBFriends
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleChange: (inputType, event) => {

            dispatch(setEventDetails(event.target.value, inputType));
        },
        getFBFriends: () => {
            dispatch(getFBFriends());
        }
    };
};

const EventDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
