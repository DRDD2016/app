import React from 'react';
import { Link } from 'react-router';

const Poll = ({event}) => {
    let eventWhat = event.eventWhat.map((elem,i) => {
        return (
            <div className="ui toggle checkbox" key={'eventWhat-'+i}>
                <input type="checkbox" name={'eventWhat-'+i} />
                <label>{elem}</label>
            </div>
        );
    });
    let eventWhere = event.eventWhere.map((elem,i) => {
        return (
            <div className="ui toggle checkbox" key={'eventWhere-'+i}>
                <input type="checkbox" name={'eventWhere-'+i} />
                <label>{elem.placeName} {elem.placeAddress}</label>
            </div>
        );
    });
    let eventWhen = event.eventWhen.map((elem,i) => {
        return (
            <div className="ui toggle checkbox" key={'eventWhen-'+i}>
                <input type="checkbox" name={'eventWhen-'+i} />
                <label>{elem.date} {elem.time}</label>
            </div>
        );
    });
    return (
        <div>
            <div>This is poll page</div>

            <h3>{event.eventName}</h3>
            <h3>{event.eventDescription}</h3>
            <h4>EventWhat</h4>
                {eventWhat}
            <h4>EventWhere</h4>
                {eventWhere}
            <h4>EventWhen</h4>
                {eventWhen}
        </div>
    );
};

export default Poll;
