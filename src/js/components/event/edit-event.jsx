import React from 'react';
import Input from '../general/input.jsx';
import AutocompleteInput from '../general/autocomplete-input.jsx';
import DateTimeInput from '../general/date-time-input.jsx';
import classnames from 'classnames';
import TopBar from './top-bar.jsx';
import { hashHistory } from 'react-router';


const EditEvent = (props) => {

    let eventWhat = props.eventWhat[0];
    let eventWhere = props.eventWhere[0];
    let eventWhen = props.eventWhen[0];

    let templateNoSpace = `${eventWhere.placeName}${eventWhere.placeAddress}`;
    let templateWithSpace = `${eventWhere.placeName} ${eventWhere.placeAddress}`;
    let chosenTemplate = eventWhere.placeAddress === '' ? templateNoSpace : templateWithSpace;
    let fullAddress = (eventWhere.placeName ? chosenTemplate : "");

    let hideButtonToggle = eventWhat.length === 0 || eventWhere.placeName === "" || eventWhen.date === "" || props.eventDetails.eventName === "" || props.eventDetails.eventDescription === "";

    let hideSaveButton = classnames("twelve columns", {
        "display-none": hideButtonToggle
    });

    return (
            <div>
                <div className="event-header row">
                    <div>
                        <p className="three columns back-button" > </p>
                        <h3 className=" six columns title">Edit Event</h3>
                        <p className="three columns cancel-event-button"></p>
                    </div>
                </div>

                <div className="container">
                    <p className="input-p-header"> Details </p>
                    <div className="row">
                        <input
                            className="eleven columns"
                            onChange={ props.handleChange.bind(this, 'eventName') }
                            value={ props.eventDetails ? props.eventDetails.eventName : '' }
                            type="text"
                            placeholder="Event name" />

                    </div>

                    <div className="row">
                        <input
                            className="eleven columns"
                            onChange={ props.handleChange.bind(this, 'eventDescription') }
                            value={ props.eventDetails ? props.eventDetails.eventDescription : '' }
                            type="text"
                            placeholder="Event description" />
                    </div>

                    <div className="row">
                        <textarea
                            className="eleven columns event-note"
                            onChange={ props.handleChange.bind(this, 'eventNote') }
                            value={ props.eventDetails ? props.eventDetails.eventNote : '' }
                            rows="5"
                            placeholder="Leave a note to your friends (optional)" />
                    </div>

                    <p className="input-p-header"> What </p>
                    <Input
                        handleChange={ props.handleEventWhat.bind(this, 0) }
                        value={ eventWhat }
                        inputKey={ 0 }
                        removeInput=''
                        placeholder="What would you like to do?"
                    />

                    <p className="input-p-header"> Where </p>
                        <AutocompleteInput
                            handleChange={ props.handleEventWhere.bind(this, 0) }
                            inputKey={ 0 }
                            value={ fullAddress }
                            placeholder="Where?"
                            id='autocomplete-0'
                            removeInput=''
                        />

                    <p className="input-p-header"> When </p>
                        <DateTimeInput
                            value={ eventWhen }
                            inputKey={ 0 }
                            handleTime={ props.handleTime }
                            handleDate={ props.handleDate }
                            removeInput=''
                        />

                    <button className="twelve columns" onClick={ () => { props.handleSaveEditedEvent(props.eventDetails.eventName, props.eventDetails.eventDescription, props.eventDetails.eventNote, eventWhat, eventWhere, eventWhen, props.params.eventID ); hashHistory.push("/feed"); } }>
                        Save Edited Event
                    </button>

                </div>
            </div>
        );
};

export default EditEvent;
