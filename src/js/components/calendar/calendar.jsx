import React from 'react';
import CalendarItem from './calendar-item.jsx';

const Calendar = ({ location, data, isFetching, fetchEvent }) => {

    let sortedData = data.sort((a, b) => {
        a = a.eventWhen[0].date;
        b = b.eventWhen[0].date;

        return new Date(a).getTime() > new Date(b).getTime();
    });
    console.log("SORTED", sortedData);
    return (
        <div className="container">
            <div className="row">
                <h4 className="twelve columns">
                    { location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2) }
                </h4>
            </div>
            {
                sortedData.map((item, i) => {

                    return <CalendarItem key={ i }
                                         eventName={ item.eventName }
                                         eventWhat={ item.eventWhat }
                                         eventWhere={ item.eventWhere }
                                         eventWhen={ item.eventWhen }
                                         coverPhoto={ item.coverPhoto }
                                         eventID={ item.eventID } />;
                })
            }
        </div>
    );
};

export default Calendar;
