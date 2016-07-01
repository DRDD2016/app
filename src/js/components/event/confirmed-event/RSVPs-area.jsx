import React from 'react';
import { store } from '../../../init-store';

const RSVPsArea = ({ eventID, invitees, RSVPs, respondedList, notRespondedList, handleClick }) => {

    function RSVPUserList (RSVPs, invitees, status) {

        return RSVPs[status].map((id, index) => {
            let usersWithRSVP = invitees.filter((userObject) => {
                return id === userObject.id;
            });

            return (
                <div className="item" key={ index }>
                    <img className="ui avatar image" src={ usersWithRSVP[0].photoURL } />
                    <div className="content">
                        <div className="header rsvp-list-items">{ usersWithRSVP[0].firstName }</div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div>
            <p className="rsvp-title">RSVPs</p>

            <div className="row">
                <div className="four columns">
                    <div className="RSVP-button going" onClick={ () => handleClick('going', eventID) }> Going </div>
                    <div className="ui big horizontal list">
                        { RSVPUserList(RSVPs, invitees, 'going') }
                    </div>
                </div>

                <div className="four columns ">
                    <div className="RSVP-button maybe " onClick={ () => handleClick('maybe', eventID) }> Maybe </div>
                    <div className="ui big horizontal list">
                        { RSVPUserList(RSVPs, invitees, 'maybe') }
                    </div>
                </div>

                <div className="four columns">
                    <div className="RSVP-button not-going" onClick={ () => handleClick('notGoing', eventID) }> Not Going </div>
                    <div className="ui big horizontal  list">
                        { RSVPUserList(RSVPs, invitees, 'notGoing') }
                    </div>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="offset-by-three six columns RSVP-button not-responded">
                    <div> Not Responded </div>
                </div>
                <div className="twelve columns">
                    <div className="ui huge horizontal list">
                        { notRespondedList(respondedList, invitees) }
                    </div>
                </div>
            </div>


            <div className="row">
                <hr className="twelve columns" />
            </div>

        </div>
    );
};

export default RSVPsArea;
