import React from 'react';
import { store } from '../../../init-store';

const RSVPsArea = ({ eventID, invitees, RSVPs, respondedList, notRespondedList }) => {

    function RSVPUserList (RSVPs, invitees, status) {

        return RSVPs[status].map((id, index) => {
            let usersWithRSVP = invitees.filter((userObject) => {
                return id === userObject.id;
            });

            return (
                <div className="twelve columns">
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
                <div className="four columns">
                    <div onClick={ () => handleClick('going', eventID) }> Going </div>
                </div>

                <div className="four columns">
                    <div onClick={ () => handleClick('maybe', eventID) }> Maybe </div>
                </div>

                <div className="four columns">
                    <div onClick={ () => handleClick('notGoing', eventID) }> Not Going </div>
                </div>
            </div>

            <div className="four columns ui middle aligned selection list verticalise">

                { RSVPUserList(RSVPs, invitees, 'going') }
            </div>

            <div className="four columns ui middle aligned selection list verticalise">
                { RSVPUserList(RSVPs, invitees, 'maybe') }
            </div>

            <div className="four columns ui middle aligned selection list verticalise">
                { RSVPUserList(RSVPs, invitees, 'notGoing') }
            </div>
        </div>
    );
};

export default RSVPsArea;
