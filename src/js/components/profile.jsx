import React from 'react';
import TopBar from './event/top-bar.jsx';
import classnames from 'classnames';

const Profile = ({ location, user, firstName, lastName, handleLogOut, handleChangeName, handleEditName }) => {

    let hideEditButton = classnames("twelve columns button-primary", {
        "display-none": firstName === ''
    });

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
                    <button className="twelve columns logout-button" onClick={ handleLogOut } >
                        Log Out
                    </button>
                </div>

                <div className="row">
                    <h4 className="twelve columns edit-name-title"> Change Name </h4>
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
                    <button className={ hideEditButton } onClick={ () => handleEditName(firstName, lastName) } >
                        Change Name
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;
