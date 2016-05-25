import React from 'react';
import { connect } from 'react-redux';
import EditEvent from '../components/event/edit-event.jsx';


const mapStateToProps = (state) => {
    return {
        event: state.event.data
    };
};


const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const EditEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditEvent);

export default EditEventContainer;
