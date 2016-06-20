import React from 'react';
import classnames from 'classnames';
import EventDetailsHeader from '../general/event-details-header.jsx';
import RSVPsArea from './confirmed-event/RSVPs-area.jsx';
import UploadPanel from './confirmed-event/upload-panel.jsx';
import PhotoStream from './confirmed-event/photo-stream.jsx';
import { eventNote } from '../../lib/confirmed-event-helpers.js';
import formatDate from '../../lib/formatDate.js';


const ConfirmedEvent = ({ event, eventID, RSVPs, invitees, userIsHost, RSVPToEvent, handleUploadPhoto, photos, deletedPhotos, handleDeletePhoto, handleSharePhoto, file, handleSetFile, getSelectedPhoto, hasPhotoLoaded }) => {


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
        <div className="confirmed-event">
            <div>
                { eventNote(event) }
                <div className="row">
                    <p className="three columns confirm-event-title what">
                        What
                    </p>
                    <div className="nine columns confirm-event what">
                        { event.eventWhat[0] || "TBC" }
                    </div>
                </div>

                <br />

                <div className="row">
                    <p className="three columns confirm-event-title where">
                        Where
                    </p>

                    <div className="nine columns confirm-event where">

                        <span className="placeName">{ event.eventWhere[0].placeName || "TBC" } </span>
                        <span className="placeAddress">{ event.eventWhere[0].placeAddress }</span>
                    </div>
                </div>

                <br />

                <div className="row">
                    <p className="three columns confirm-event-title when">
                        When
                    </p>

                    <div className="nine columns confirm-event when">
                        <div className="date">
                            { formatDate(event.eventWhen[0].date, true) || "TBC" }
                        </div>
                        <div className="time">
                            { event.eventWhen[0].time || "TBC" }
                        </div>
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

                <UploadPanel eventID={ eventID }
                             hasPhotoLoaded={ hasPhotoLoaded }
                             handleUploadPhoto={ handleUploadPhoto }
                             file={ file }
                             handleSetFile={ handleSetFile }/>

                <PhotoStream photos={ photos }
                             hasPhotoLoaded={ hasPhotoLoaded }
                             deletedPhotos={ deletedPhotos }
                             handleDeletePhoto={ handleDeletePhoto }
                             handleSharePhoto={ handleSharePhoto }
                             getSelectedPhoto={ getSelectedPhoto }
                             eventID={ eventID }/>

            </div>

        </div>
    );

};

export default ConfirmedEvent;
