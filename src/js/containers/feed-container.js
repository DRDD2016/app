import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/feed.jsx';
import { getUser } from '../actions/user.js';
import { getNotifications } from '../actions/notifications.js';
import { updateNotification } from '../actions/event.js';

const mapStateToProps = (state) => {

    return {
        user: state.user,
        notifications: state.notifications.data,
        isFetching: state.notifications.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleUpdateNotification: (index) => {

            console.log(index, 'handle update notification!!!');
            dispatch(updateNotification(index));
        }
    };
};


const FeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);

export default FeedContainer;
