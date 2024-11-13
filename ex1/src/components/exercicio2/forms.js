import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TodoContext } from "./context";
import { useContext } from "react";

function Forms( ) {

    const {add_todo, todo} = useContext(TodoContext);

    const [input, setInput] = useState('');

    function handle_submit(e) {

        e.preventDefault();
        if (input.trim() === '' || input.trim().length < 3) {
            alert('Please enter a valid todo');
            return;
        }
        const newTodo = {id: `todo-${todo.length}`, name: input, completed: false};
       add_todo(newTodo);
       setInput('');
    }

   


    return (
        <form onSubmit={handle_submit}>
        <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
            </label>
        </h2>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
        />
        <button type="submit" className="btn btn__primary btn__lg">
            Add
        </button>
        </form>
    );
    }

 

    export default Forms;


  

    