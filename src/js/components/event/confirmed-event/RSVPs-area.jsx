import React from 'react';
import { store } from '../../../init-store';

const RSVPsArea = ({ eventID, invitees, RSVPs, respondedList, notRespondedList, handleClick }) => {

    function RSVPUserList (RSVPs, invitees, status) {

        return RSVPs[status].map((id, index) => {
            let usersWithRSVP = invitees.filter((userObject) => {
                return id === userObject.id;
            });

            return (
                <div className="twelve columns RSVP-user-list">
                    <div className="ui image label" key={ index }>
                        <img src={ usersWithRSVP[0].photoURL } />
                        { usersWithRSVP[0].firstName }
                    </div>
                </div>
            );
        });
    }

    return (
        <div>

            <div className="row">
                <div className="twelve columns">
                    <div>Not responded</div>
                    { notRespondedList(respondedList, invitees) }
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="four columns RSVP-button-going">
                    <div onClick={ () => handleClick('going', eventID) }> Going </div>
                </div>

                <div className="four columns RSVP-button-maybe">
                    <div onClick={ () => handleClick('maybe', eventID) }> Maybe </div>
                </div>

                <div className="four columns RSVP-button-not-going">
                    <div onClick={ () => handleClick('notGoing', eventID) }> Not Going </div>
                </div>
            </div>

            <div className="row RSVP-flex-container">
                <div className="four columns ui middle aligned selection list verticalise going">

                    { RSVPUserList(RSVPs, invitees, 'going') }
                </div>

                <div className="four columns ui middle aligned selection list verticalise maybe">
                    { RSVPUserList(RSVPs, invitees, 'maybe') }
                </div>

                <div className="four columns ui middle aligned selection list verticalise not-going">
                    { RSVPUserList(RSVPs, invitees, 'notGoing') }
                </div>
            </div>

            <div className="row">
                <hr className="twelve columns" />
            </div>

        </div>
    );
};

export default RSVPsArea;
