import React from 'react';

const Filters = ({filters, heading, setFilterValue, selectedFilter}) => {
    return ( 
        <React.Fragment>
            <span>{heading}</span>
                <div className="filter_name">
                    {filters && filters.length ? filters.map((filter, index) => <a href="#" className={selectedFilter === filter ?"active" : ""} 
                        onClick={() => {setFilterValue(filter)}}
                        key={index}>{filter}</a>): ""}
                </div>
        </React.Fragment>
     );
}
 
export default Filters;