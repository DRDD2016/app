import React from 'react';
import TopBar from './event/top-bar.jsx';
import classnames from 'classnames';
import { hashHistory } from 'react-router';

const Profile = ({ location, user, firstName, lastName, handleLogOut, handleChangeName, handleEditName }) => {

    let hideEditButton = classnames("twelve columns button-primary", {
        "display-none": firstName === ''
    });

    function changeName (firstName, lastName) {
        handleEditName(firstName, lastName);
        hashHistory.push('/feed');
    }

    return (
        <div className="profile-page">

            <TopBar location={ location } />

            <div className="container">

                <div className="row">
                    <h2 className="twelve columns user-name"> { firstName + ' ' + lastName } </h2>
                </div>

                <div className="row">
                    <img className="ui profile-page-photo circular image" src={ user.photoURL  } alt="Host photo" />
                </div>

                <div className="row">
                    <p className="twelve columns edit-name-title"> Change Name </p>
                </div>

                <div className="row">
                    <input
                        className="twelve columns"
                        value={ firstName }
                        onChange={ (e) => handleChangeName('firstName', e) }
                        type="text"
                        placeholder="First name" />
                </div>

                <div className="row">
                    <input
                        className="twelve columns"
                        onChange={ (e) => handleChangeName('lastName', e) }
                        value={ lastName }
                        type="text"
                        placeholder="Surname" />
                </div>

                <div className="row">
                    <button className={ hideEditButton } onClick={ () => changeName(firstName, lastName) } >
                        Change Name
                    </button>
                </div>

                <div className="row">
                    <button className="offset-by-three six columns logout-button" onClick={ handleLogOut } >
                        Log Out
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;
