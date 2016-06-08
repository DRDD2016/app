import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile.jsx';
import removeCookie from '../lib/removeCookie.js';
import { hashHistory } from 'react-router';
import { addInput } from '../../actions/create-event.js';


const mapStateToProps = (state) => {
    return {
        user: state.user,
        editedfirstName: state.user.editedfirstName,
        editedlastName: state.user.editedlastName
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleLogOut: () => {
            removeCookie();
            hashHistory.push('/');
        },
        handleAddInput: () => {
        }
    };
};


const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Profile);

export default ProfileContainer;
