import React from "react";
import PropTypes from 'prop-types';


function TodoFilter({setFilter, filter}) {

   

    return (
       
        <div className="filters btn-group stack-exception">
            <button type="button" className=" btn toggle-btn" aria-pressed={filter==='All'} onClick={() => setFilter('All')}>
                <span >All</span>
            </button>
            <button type="button" className=" btn toggle-btn" onClick={() => setFilter('Active')} aria-pressed={filter==='Active'}>
                <span >Active</span>
            </button>
            <button type="button" className=" btn toggle-btn" onClick={() => setFilter('Completed')} aria-pressed={filter==='Completed'}>
                <span >Completed</span>
            </button>
        </div>
       
    
);
}


export default TodoFilter;


TodoFilter.propTypes = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}
