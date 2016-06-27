import React from 'react';

export function RSVPUserList (RSVPs, invitees, status) {

    return RSVPs[status].map((id, index) => {
        let usersWithRSVP = invitees.filter((userObject) => {
            return id === userObject.id;
        });

        return (
            <div className="twelve columns">
                <div className="ui image label" key={ usersWithRSVP[0].id }>
                    <img src={ usersWithRSVP[0].photoURL } />
                    { usersWithRSVP[0].firstName }
                </div>
            </div>
        );
    });
}


export function eventNote (event) {

    if (event.eventNote !== "") {
        return (
            <div className="event-note">
                <p className="twelve columns">Message from the host</p>
                <span>{ event.eventNote }</span>
            </div>
        );
    }
}

export function getCurrentTime (callback) {
    return Date.now();
}
