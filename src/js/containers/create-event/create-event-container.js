import React from 'react';
import { connect } from 'react-redux';
import CreateEvent from '../../components/create-event/create-event.jsx';

const mapStateToProps = (state) => {

    return {
        eventDetails: state.createEvent.eventDetails,
    };
};

const CreateEventContainer = connect(
    mapStateToProps
)(CreateEvent);

export default CreateEventContainer;
