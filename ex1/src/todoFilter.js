import React from "react";
import { useState } from "react";
import ListTodo from "./listTodo";

function TodoFilter({todo }) {

    const [filter, setFilter] =useState('All');

 

    return (
        <div>
        <div className="filters btn-group stack-exception">
            <button type="button" className=" btn toggle-btn">
                <span onClick={() => setFilter('All')}>All</span>
            </button>
            <button type="button" className=" btn toggle-btn">
                <span onClick={() => setFilter('Active')}>Active</span>
            </button>
            <button type="button" className=" btn toggle-btn">
                <span onClick={() => setFilter('Completed')}>Completed</span>
            </button>
        </div>
        <ListTodo filter={filter} todo={todo}/>
        </div>
);
}


export default TodoFilter;