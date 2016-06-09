import React from 'react';
import classnames from 'classnames';

const Profile = ({ user, firstName, lastName, handleLogOut, handleChangeName, handleEditName }) => {

    let hideEditButton = classnames({
        "display-none": firstName === ''
    });

    return (
        <div className="profile-page">

            <div className="event-header row">
                <h3 className="twelve columns title">Profile</h3>
            </div>

            <div className="container">

                <div className="twelve columns">
                <h2 className="user-name"> { firstName + ' ' + lastName } </h2>
                    <img className="ui profile-page-photo circular image" src={ user.photoURL  } alt="Host photo" />
                </div>

                <div className="twelve columns">
                    <h4 className="edit-name-title"> Edit Name </h4>
                    <input
                        className="twelve columns"
                        value={ firstName }
                        onChange={ (e) => handleChangeName('firstName', e) }
                        type="text"
                        placeholder="First Name" />
                    <input
                        className="twelve columns"
                        onChange={ (e) => handleChangeName('lastName', e) }
                        value={ lastName }
                        type="text"
                        placeholder="Last Name" />

                    <button className={ hideEditButton } onClick={ () => handleEditName(firstName, lastName) } >
                        Change Name
                    </button>
                </div>



                <button className="logout-button" onClick={ handleLogOut } >
                    Log Out
                </button>
            </div>

        </div>

    );
};

export default Profile;
