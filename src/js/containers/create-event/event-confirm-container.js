import React from 'react';
import { connect } from 'react-redux';
import { newEvent, clearCreateEvent } from '../../actions/create-event.js';
import EventConfirm from '../../components/create-event/event-confirm.jsx';
import { isPoll, cleanEventData } from '../../lib/eventConfirmHelpers.js';
import { store } from '../../init-store.js';

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
        data: cleanEventData(data)
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        saveEvent: (data) => {

            const state = store.getState();
            data.isPoll = isPoll(data);
            data.hostID = state.user.id;
            dispatch(newEvent(data));
        },

        discardEvent: () => {

            dispatch(clearCreateEvent());
        },
    };
};

const EventConfirmContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventConfirm);

export default EventConfirmContainer;
