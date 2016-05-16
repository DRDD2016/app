import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/feed.jsx';
import { getUser } from '../actions/user.js';
import { getNotifications } from '../actions/notifications.js';

const mapStateToProps = (state) => {

    return {
        user: state.user,
        notifications: state.notifications.data,
        isFetching: state.notifications.isFetching
    };
};


const FeedContainer = connect(
    mapStateToProps
)(Feed);

export default FeedContainer;
