import React from 'react';
import classnames from 'classnames';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './invitee-poll-sections.jsx';
import HostCreateEventButton from './host-create-event-button.jsx';


class HostPoll extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        let eventWhat = createVoteSection(this.props.event, this.props.tally, 'eventWhat', EventWhatSection, this.props.handleHostEventChoices, this.props.hostEventChoices);
        let eventWhere = createVoteSection(this.props.event, this.props.tally, 'eventWhere', EventWhereSection, this.props.handleHostEventChoices, this.props.hostEventChoices);
        let eventWhen = createVoteSection(this.props.event, this.props.tally, 'eventWhen', EventWhenSection, this.props.handleHostEventChoices, this.props.hostEventChoices);

        return (
            <div>
                Here be the host poll page

                <h4>What</h4>
                { eventWhat }

                <h4>Where</h4>
                { eventWhere }

                <h4>When</h4>
                { eventWhen }

                <HostCreateEventButton hostEventChoices={ this.props.hostEventChoices }
                                       handleConfirmEvent={ this.props.handleConfirmEvent }
                                       eventID={ this.props.eventID } />

            </div>
        );
    }
}

function createVoteSection (event, tally, eventType, EventTypeComponent, handleHostEventChoices, hostEventChoices) {
    return event[eventType].map((choice, i) => {
        let options = {
            "poll-eventWhat": eventType === "eventWhat" && tally[eventType],
            "poll-eventWhere": eventType === "eventWhere" && tally[eventType],
            "poll-eventWhen": eventType === "eventWhen" && tally[eventType],
            "poll-selected-eventWhat": eventType === "eventWhat" && hostEventChoices[eventType] === i,
            "poll-selected-eventWhere": eventType === "eventWhere" && hostEventChoices[eventType] === i,
            "poll-selected-eventWhen": eventType === "eventWhen" && hostEventChoices[eventType] === i
        };

        let classes = classnames("poll-option nine columns", options);

        var tallyCount = tally[eventType] ? tally[eventType][i] : '';

        if (tally[eventType]) {

            return (
                <div onClick={ () => handleHostEventChoices(eventType, choice, i) } className={ "" + eventType }  key={ eventType + '-' + i }>
                    <EventTypeComponent text={ choice }
                        tally={ tallyCount }
                        classOptions={ classes }
                        />
                </div>
            );
        } else {

            return (
                <div key={ eventType + '-' + i }>
                    <EventTypeComponent text={ choice }
                        tally={ tallyCount }
                        classOptions={ classes }
                        />
                </div>
            );
        }
    });
}



export default HostPoll;
