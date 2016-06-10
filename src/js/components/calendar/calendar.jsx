import React from 'react';
import CalendarItem from './calendar-item.jsx';
import FilterPanel from '../general/filter-panel.jsx';

const Calendar = ({ location, data, isFetching, fetchEvent, displaySome, displayAll, isFilter, isShowHosting }) => {

    let sortedData = data.sort((a, b) => {
        a = a.eventWhen[0].date;
        b = b.eventWhen[0].date;

        return new Date(a).getTime() > new Date(b).getTime();
    });

    return (
        <div className="container">
            <div className="row">
                <h4 className="twelve columns">
                    { location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2) }
                </h4>
            </div>
            {
                !isFetching && <FilterPanel displaySome={ displaySome }
                                            displayAll={ displayAll }
                                            isFilter={ isFilter }
                                            isShowHosting={ isShowHosting } />
            }
            {
                !isFetching && sortedData.map((item, i) => {

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
