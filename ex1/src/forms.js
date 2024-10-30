import React from "react";
import {useState} from 'react';
import './App.css';

    

export default function Forms() {



    const [add, setAdd] = useState('');
    const [todos, setTodos] = useState([]);
    const[active, setActive] = useState([]);
    const[completed, setCompleted] = useState([]);
    
    
    const handleChange = (e) => {
        setAdd(e.target.value);
        
        }
        
        const handleSubmit = (e) => {
          setTodos([...todos, {text: add, completed: false}]);
          setAdd('');
        }
        

    
      return(
<forms>
        <h2 className='label-wrapper'>What needs to be done? </h2>
        <input type="text" id=' new-todo-input'  className='input input__lg' placeholder="Enter a task" onChange={handleChange}/>
       <button type='submit' className=' btn btn__primary btn__lg' onClick={handleSubmit}>
        
      Add
       </button>
</forms>
      );
}