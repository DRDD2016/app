import React from 'react';
import { connect } from 'react-redux';
import { newEvent, clearCreateEvent } from '../../actions/create-event.js';
import EventConfirm from '../../components/create-event/event-confirm.jsx';
import { isPoll, cleanEventData } from '../../lib/create-event-helpers.js';
import { store } from '../../init-store.js';

const mapStateToProps = (state) => {

    const data = {
        eventName: state.createEvent.eventDetails.eventName,
        eventDescription: state.createEvent.eventDetails.eventDescription,
        eventNote: state.createEvent.eventDetails.eventNote,
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
            data.hostPhotoURL = state.user.photoURL;
            dispatch(newEvent(data));
        }
    };
};

const EventConfirmContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventConfirm);

export default EventConfirmContainer;
