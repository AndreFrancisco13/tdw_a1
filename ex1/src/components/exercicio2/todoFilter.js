import React from "react";
import PropTypes from 'prop-types';
import { TodoContext } from "./context";
import { useContext } from "react";

function TodoFilter() {

   const {filter, setFilter} = useContext(TodoContext);

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



