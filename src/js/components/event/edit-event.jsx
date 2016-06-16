import React from 'react';
import Input from '../general/input.jsx';
import AutocompleteInput from '../general/autocomplete-input.jsx';
import DateTimeInput from '../general/date-time-input.jsx';
import classnames from 'classnames';




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
            <div className="container">

                <h2> Event Details </h2>
                <div className="row">
                    <input
                        className="twelve columns"
                        onChange={ props.handleChange.bind(this, 'eventName') }
                        value={ props.eventDetails ? props.eventDetails.eventName : '' }
                        type="text"
                        placeholder="Event name" />

                </div>

                <div className="row">
                    <input
                        className="twelve columns"
                        onChange={ props.handleChange.bind(this, 'eventDescription') }
                        value={ props.eventDetails ? props.eventDetails.eventDescription : '' }
                        type="text"
                        placeholder="Event description" />
                </div>

                <div className="row">
                    <input
                        className="twelve columns event-note"
                        onChange={ props.handleChange.bind(this, 'eventNote') }
                        value={ props.eventDetails ? props.eventDetails.eventNote : '' }
                        type="text"
                        placeholder="Event Note" />
                </div>

                <h2> What </h2>
                <Input
                    handleChange={ props.handleEventWhat.bind(this, 0) }
                    value={ eventWhat }
                    inputKey={ 0 }
                    removeInput=''
                    placeholder="What would you like to do?"
                />

                <h2> Where </h2>
                <AutocompleteInput
                    handleChange={ props.handleEventWhere.bind(this, 0) }
                    inputKey={ 0 }
                    value={ fullAddress }
                    placeholder="Where?"
                    id='autocomplete-0'
                    removeInput=''
                />

                <h2> when </h2>
                <DateTimeInput
                    value={ eventWhen }
                    inputKey={ 0 }
                    handleTime={ props.handleTime }
                    handleDate={ props.handleDate }
                    removeInput=''
                />

                <button className="twelve columns button-primary" onClick={ () => { props.handleSaveEditedEvent(props.eventDetails.eventName, props.eventDetails.eventDescription, props.eventDetails.eventNote, eventWhat, eventWhere, eventWhen, props.params.eventID ); } }>
                    Save Edited Event
                </button>

            </div>
        );
};

export default EditEvent;
