import React from 'react';
import { connect } from 'react-redux';
import { newEventRequest } from '../actions/create-event.js';
import EventConfirm from '../components/event-confirm.jsx';

const mapStateToProps = (state) => {

    let data = state.createEvent;

    return {
        data: data,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        saveEvent: (data) => {
            // DO SOMETHING PRETTY TO DATA
            dispatch(newEventRequest(data));
        },

        discardEvent: () => {

            // CREATE A DISPATCH TO RESET STATE
        },

    };
};

const EventConfirmContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventConfirm);

export default EventConfirmContainer;
