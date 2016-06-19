import React from 'react';
import { connect } from 'react-redux';
import Event from '../components/event/event.jsx';
import getUserID from '../lib/getUserID.js';
import { getEvent, updatePoll, confirmPoll, addHostEventChoice, confirmEvent, deleteEvent, updateRSVP } from '../actions/event.js';
import { setPhoto, selectPhoto, getS3URL, deletePhoto, sharePhoto } from '../actions/photos.js';
import { hydrateCreateEvent } from '../actions/create-event.js';
import { listenForS3URL } from '../lib/action-listeners.js';
import { listenForSavePhotoURL } from '../lib/save-photo-url-helper.js';

import { store } from '../init-store.js';



const mapStateToProps = (state) => {

    return {
        isPoll: state.event.data.isPoll,
        event: state.event.data,
        poll: state.event.poll,
        hasVoted: state.event.hasVoted,
        tally: state.event.tally,
        RSVPs: state.event.RSVPs,
        invitees: state.event.invitees,
        hostEventChoices: state.event.hostEventChoices,
        isFetching: state.event.isFetching,
        userIsHost: state.event.data.hostID == getUserID(),
        photos: state.photos.photos,
        deletedPhotos: state.photos.deletedPhotos,
        file: state.photos.file
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
        handleConfirmEvent: (hostEventChoices, eventID) => {

            dispatch(confirmEvent(hostEventChoices, eventID));
        },
        handleDeleteEvent: (eventID) => {

            dispatch(deleteEvent(eventID));
        },
        handleEdit: (event) => {

            dispatch(hydrateCreateEvent(event));
        },
        RSVPToEvent: (status, eventID) => {

            dispatch(updateRSVP(status, eventID));
        },
        handleUploadPhoto: (file, eventID) => {
            listenForS3URL(store);
            listenForSavePhotoURL(store);
            dispatch(getS3URL(file.name, file.type, eventID));
        },
        handleDeletePhoto: (photo, eventID) => {
            dispatch(deletePhoto(photo, eventID));
        },
        handleSharePhoto: (photoURL) => {

            dispatch(sharePhoto(photoURL));
        },
        handleSetPhoto: (file) => {

            dispatch(setPhoto(file));
        },
        selectPhotoToShare: (photoURL) => {

            dispatch(selectPhoto(photoURL));
        }
    };
};

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);

export default EventContainer;
