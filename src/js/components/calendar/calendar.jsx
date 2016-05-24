import React from 'react';
import CalendarItem from './calendar-item.jsx';

const Calendar = ({ data, isFetching, fetchEvent }) => {

    return (
        <div className="container">
            {
                data.map((item, i) => {
                    return <CalendarItem key={ i }
                                         eventName={ item.eventName }
                                         eventWhat={ item.eventWhat }
                                         eventWhere={ item.eventWhere }
                                         eventWhen={ item.eventWhen }
                                         eventID={ item.eventID } />;
                })
            }
        </div>
    );
};

export default Calendar;
