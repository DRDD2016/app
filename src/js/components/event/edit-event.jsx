import React from 'react';
import Input from '../general/input.jsx';
import AutocompleteInput from '../general/autocomplete-input.jsx';
import DateTimeInput from '../general/date-time-input.jsx';




class EditEvent extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        let value = this.props.eventWhat[0];

        let eventWhere = this.props.eventWhere[0];
        let eventWhen = this.props.eventWhen[0];

        let templateNoSpace = `${eventWhere.placeName}${eventWhere.placeAddress}`;
        let templateWithSpace = `${eventWhere.placeName} ${eventWhere.placeAddress}`;
        let chosenTemplate = eventWhere.placeAddress === '' ? templateNoSpace : templateWithSpace;
        let fullAddress = (eventWhere.placeName ? chosenTemplate : "");

        return (
            <div>
                This is the Edit Event View

                Event What
                <Input
                    handleChange={ this.props.handleEventWhat.bind(this, 0) }
                    value={ value }
                    inputKey={ 0 }
                    removeInput=''
                    placeholder= "What would you like to do?"
                />

                Event Where
                <AutocompleteInput
                    handleChange={ this.props.handleEventWhere.bind(this, 0) }
                    inputKey={ 0 }
                    value={ fullAddress }
                    placeholder= "Where?"
                    id = 'autocomplete-0'
                    removeInput=''
                />

            Event when
                <DateTimeInput
                    value={ eventWhen }
                    inputKey={ 0 }
                    handleTime={ this.props.handleTime }
                    handleDate={ this.props.handleDate }
                    removeInput=''
                />

            </div>
        );
    }
}

export default EditEvent;
