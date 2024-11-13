import React, { useState } from "react";



function Forms( {add_fazer, fazer} ) {

    const [input, setInput] = useState('');

    function handle_submit(e) {

        e.preventDefault();
        if (input.trim() === '' || input.trim().length < 3) {
            alert('Please enter a valid fazer');
            return;
        }
        const newFazer = {id: `fazer-${fazer.length}`, name: input, completed: false};
       add_fazer(newFazer);
       setInput('');
    }

   


    return (
        <form onSubmit={handle_submit}>
        <h2 className="label-wrapper">
            <label htmlFor="new-fazer-input" className="label__lg">
            What needs to be done?
            </label>
        </h2>
        <input
            type="text"
            id="new-fazer-input"
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