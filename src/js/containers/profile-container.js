import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile.jsx';
import removeCookie from '../lib/removeCookie.js';
import { hashHistory } from 'react-router';

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleLogOut: () => {
            console.log('running handle log out');
            removeCookie();
            // remove cookie for the user
            hashHistory.push('/')
        }
    };
};


const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Profile);

export default ProfileContainer;
