import React from 'react';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './invitee-poll-sections.jsx';


class HostPoll extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        let eventWhat = createVoteSection(this.props.event, this.props.tally, 'eventWhat', EventWhatSection, this.props.confirmEvent);
        let eventWhere = createVoteSection(this.props.event, this.props.tally, 'eventWhere', EventWhereSection, this.props.confirmEvent);
        let eventWhen = createVoteSection(this.props.event, this.props.tally, 'eventWhen', EventWhenSection, this.props.confirmEvent);

        return (
            <div>
                Here be the host poll page

                <h4>What</h4>
                { eventWhat }

                <h4>Where</h4>
                { eventWhere }

                <h4>When</h4>
                { eventWhen }
            </div>
        );
    }
}

function createVoteSection (event, tally, eventType, EventTypeComponent, confirmEvent) {

    return event[eventType].map((choice, i) => {

        var tallyCount = tally[eventType] ? tally[eventType][i] : '';

        if (tally[eventType]) {

            return (
                <div onClick={ () => confirmEvent(eventType, choice, i) } className={ "ui label massive poll-" + eventType }  key={ eventType + '-' + i }>
                    <EventTypeComponent text={ choice }
                        tally={ tallyCount }
                        />
                </div>
            );
        } else {

            return (
                <div key={ eventType + '-' + i }>
                    <EventTypeComponent text={ choice }
                        tally={ tallyCount }
                        />
                </div>
            );
        }
    });
}



export default HostPoll;
