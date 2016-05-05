import React from 'react';
import { connect } from 'react-redux';
import { newEvent } from '../../actions/create-event.js';
import EventConfirm from '../../components/create-event/event-confirm.jsx';
import { store } from '../../init-store.js';

function isPoll (data) {

    return !!data.eventWhat[1] || !!data.eventWhere[1] || !!data.eventWhen[1];
}

const mapStateToProps = (state) => {

    const data = {
        eventName: state.createEvent.eventDetails.eventName,
        eventDescription: state.createEvent.eventDetails.eventDescription,
        eventWhat: state.createEvent.eventWhat,
        eventWhere: state.createEvent.eventWhere,
        eventWhen: state.createEvent.eventWhen,
        invitees: state.createEvent.invitees
    };

    return {
        data: data
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        saveEvent: (data) => {
            // DO SOMETHING PRETTY TO DATA
            const state = store.getState();
            data.isPoll = isPoll(data);
            data.hostID = state.user.id;
            dispatch(newEvent(data));
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
