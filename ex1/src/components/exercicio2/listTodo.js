import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "./context";
import { useContext } from "react";

function ListTodo () {

const {todo, setTodo, filter, deleteTodo, on_check} = useContext(TodoContext);

 const [results, setResults] = useState([]);
 const [editingId, setEditingId] = useState(null);
 const [newName, setNewName] = useState('');
 const [searching, setSearching] = useState('');

 useEffect(() => {
    let filteredResults = [];
    if (filter === 'All') {
        filteredResults = todo;
    } else if (filter === 'Active') {
        filteredResults = todo.filter((todo) => !todo.completed);
    } else if (filter === 'Completed') {
        filteredResults = todo.filter((todo) => todo.completed);
    }

    if (searching !== '') {
        filteredResults = filteredResults.filter((todo) => 
            todo.name.toLowerCase().includes(searching.toLowerCase())
        );
    }

    setResults(filteredResults);
}, [filter, todo, searching]);



const updateTodo=(id)=>{
setEditingId(id);
}

const handleCancel=()=>{
 setEditingId(null);
 setNewName('');

}

const handleSave=(id)=>{
    if (newName.trim() !== '' && newName.trim().length > 3) {
        const updatedTodo = todo.map((todo)=>{
            if (todo.id === id) {
                return {...todo, name: newName}
            }
            return todo;
        });
    
        setResults(updatedTodo);
        setEditingId(null);
        setNewName('');
    }else{
    alert('Please enter a valid todo');
}
}


    return (
    <div>
       
          
            <form>
            <input
            className="todo-text"
            type="text"
            value={searching}
            placeholder="Search a todo"
            onChange={(e) => setSearching(e.target.value)}/>
            </form>
      

        
            <div>
            <h2 id="list-heading">
                {results.length} Tasks
            </h2>
    {results.map((todo) => (
                <ul role="list" key={todo.id} className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
                    <li className="todo stack-small" >
                        <div className="stack-small">
                            <div className="c-cb">
                            <input type="checkbox" checked={todo.completed} onChange={()=>on_check(todo.id)}/>
                            {editingId === todo.id ? (
                            <form className="stack-small"> 
                            <div className="form-group">
                            <label className="todo-label">
                            New name for {todo.name}
                            </label>
                            <input
                            className="todo-text"
                            type="text"
                            value={newName}
                            onChange={(e)=>setNewName(e.target.value)} />
                                    </div>
                            </form>
                        
                            ):(
                                <label className="todo-label">
                                {todo.name}
                                </label>
    
                            )}
                            </div>
                            <div className="btn-group">
                                {editingId === todo.id ? (
                                    <>
                                <button type="button" className="btn" onClick={()=>handleCancel()}>
                                 <span>Cancel</span>
                                 </button>
                                 <button type="button" className="btn btn__primary todo-edit" onClick={()=>handleSave(todo.id)}>
                                     <span>Save</span>
                                 </button> 
                                 </>
                                ):(
                                    <>
                                    <button type="button" className="btn" onClick={()=>updateTodo(todo.id)}>
                                    <span>edit</span>
                                </button>
                                <button type="button" className="btn btn__danger" onClick={()=>deleteTodo(todo.id)}>
                                    <span>delete</span>
                                </button> 
                                </>
                            )}
                                
                            </div>
                        </div>
                    </li>
               
                </ul>
                 ))}
            </div>
    
    </div>)
   
        }



export default ListTodo;




