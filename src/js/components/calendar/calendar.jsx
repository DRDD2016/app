import React from 'react';
import TopBar from '../event/top-bar.jsx';
import CalendarItem from './calendar-item.jsx';
import FilterPanel from '../general/filter-panel.jsx';
import Spinner from '../general/spinner.jsx';

const Calendar = ({ location, allEvents, filteredEvents, isFetching, fetchEvent, displaySome, displayAll, calendarIsFiltered, isShowHosting }) => {

    let sortedData = filteredEvents.sort((a, b) => {
        a = a.eventWhen[0].date;
        b = b.eventWhen[0].date;

        return new Date(a).getTime() > new Date(b).getTime();
    });
    
    return (
        <div>
            <TopBar location={ location } />

            <div className="container">
                {
                    isFetching && <Spinner />
                }
                {
                    !isFetching && allEvents.length > 0 && <FilterPanel displaySome={ displaySome }
                                                                        displayAll={ displayAll }
                                                                        calendarIsFiltered={ calendarIsFiltered }
                                                                        isShowHosting={ isShowHosting } />
                }
                {
                    sortedData.length === 0 && !isFetching &&
                        <div className="no-events-message">
                            You have no { location.pathname.indexOf('album') !== -1 ? "past" : "upcoming" } events.
                        </div>
                }
                {
                    !isFetching && sortedData.map((item, i) => {
                        let RSVPstatus = undefined;
                        return <CalendarItem key={ i }
                                             RSVPstatus={ RSVPstatus }
                                             eventName={ item.eventName }
                                             eventWhat={ item.eventWhat }
                                             eventWhere={ item.eventWhere }
                                             eventWhen={ item.eventWhen }
                                             coverPhoto={ item.coverPhoto }
                                             eventID={ item.eventID } />;
                    })
            }
            </div>
        </div>
    );
};

export default Calendar;
