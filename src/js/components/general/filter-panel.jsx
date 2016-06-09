import React from 'react';

const FilterPanel = ({ displaySome, displayAll }) => {

    return (
        <div className="row filter-panel">
            <div className="four columns filter" onClick={ displayAll }>
                All
            </div>
            <div className="four columns filter" onClick={(e) => displaySome(false) } >
                Received
            </div>
            <div className="four columns filter" onClick={(e) => displaySome(true) } >
                Hosting
            </div>
        </div>
    );
};

export default FilterPanel;
