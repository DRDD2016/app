import React from 'react';
import CalendarItem from './calendar-item.jsx';

const Calendar = ({ data, isFetching, fetchEvent }) => {

    return (
        <div className="container">
            <div className="row">
                <h4 className="twelve columns">
                    Calendar
                </h4>
            </div>
            {
                data.map((item, i) => {
                    
                    return <CalendarItem key={ i }
                                         eventName={ item.eventName }
                                         eventWhat={ item.eventWhat }
                                         eventWhere={ item.eventWhere }
                                         eventWhen={ item.eventWhen }
                                         hostPhotoURL={ item.hostPhotoURL }
                                         eventID={ item.eventID } />;
                })
            }
        </div>
    );
};

export default Calendar;
