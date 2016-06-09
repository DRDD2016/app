import React from 'react';
import classnames from 'classnames';
import EventDetailsHeader from '../general/event-details-header.jsx';
import RSVPsArea from './confirmed-event/RSVPs-area.jsx';
import UploadPanel from './confirmed-event/upload-panel.jsx';
import PhotoStream from './confirmed-event/photo-stream.jsx';
import { eventNote } from '../../lib/confirmed-event-helpers.js';


const ConfirmedEvent = ({ event, eventID, RSVPs, invitees, userIsHost, RSVPToEvent, handleUploadPhoto, photos, deletedPhotos, handleDeletePhoto, handleSharePhoto }) => {

    let handleClick = !userIsHost ? RSVPToEvent : '';
    let going = RSVPs.going;
    let notGoing = RSVPs.notGoing;
    let maybe = RSVPs.maybe;
    let respondedList = going.concat(maybe, notGoing);

    let notRespondedList = (responded, invitees) => {

        let notResponded = invitees.filter((invitedUser, index) => {
            return responded.indexOf(invitedUser.id) === -1;
        });

        return notResponded.map((user, i) => {
            return (
                <div className="ui image label" key={ user.id }>
                    <img src={ user.photoURL } />
                    { user.firstName }
                </div>
            );
        });
    };

    return (
        <div>
            { eventNote(event) }
            <div className="row">
                <h4 className="twelve columns">
                    What
                </h4>
            </div>

            <div className="row">
                <div className="twelve columns">
                    { event.eventWhat[0] || "TBC" }
                </div>
            </div>

            <br />

            <div className="row">
                <h4 className="twelve columns">
                    Where
                </h4>
            </div>

            <div className="row">
                <div className="twelve columns">
                    { event.eventWhere[0].placeName || "TBC" } { event.eventWhere[0].placeName }
                </div>
            </div>

            <br />

            <div className="row">
                <h4 className="twelve columns">
                    When
                </h4>
            </div>

            <div className="row">
                <div className="twelve columns">
                    <span className="eventWhen-date">
                        { event.eventWhen[0].date || "TBC" }
                    </span>
                    <span className="eventWhen-time">
                        { event.eventWhen[0].time || "TBC" }
                    </span>
                </div>
            </div>

            <br />
            <hr />

            <RSVPsArea eventID={ eventID }
                       respondedList={ respondedList }
                       notRespondedList={ notRespondedList }
                       invitees={ invitees }
                       handleClick={ handleClick }
                       RSVPs={ RSVPs } />

            <UploadPanel eventID={ eventID } handleUploadPhoto={ handleUploadPhoto } />

            <PhotoStream photos={ photos }
                         deletedPhotos={ deletedPhotos }
                         handleDeletePhoto={ handleDeletePhoto }
                         handleSharePhoto={ handleSharePhoto }
                         eventID={ eventID }/>

        </div>
    );

};

export default ConfirmedEvent;
