import React from 'react';
import classnames from 'classnames';


const FilterPanel = ({ displaySome, displayAll, calendarIsFiltered, isShowHosting }) => {
    
    let allButtonClasses = classnames("four columns filter", {
        "selected": !calendarIsFiltered
    });
    let receivedButtonClasses = classnames("four columns filter", {
        "selected": calendarIsFiltered && !isShowHosting
    });
    let hostingButtonClasses = classnames("four columns filter", {
        "selected": calendarIsFiltered && isShowHosting
    });


    return (
        <div className="row filter-panel">
            <div className={ allButtonClasses } onClick={ displayAll }>
                All
            </div>
            <div className={ receivedButtonClasses } onClick={(e) => displaySome(false) } >
                Received
            </div>
            <div className={ hostingButtonClasses } onClick={(e) => displaySome(true) } >
                Hosting
            </div>
        </div>
    );
};

export default FilterPanel;
