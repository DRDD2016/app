import React from 'react';
import { connect } from 'react-redux';
import App from '../components/app.jsx';

const mapStateToProps = (state) => {
    return {
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        login: () => {
            dispatch(userLogin());
        }
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
