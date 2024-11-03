
import './App.css';
import React, {useState} from 'react';
import Forms from './forms.js';
import TodoFilter from './todoFilter.js';



function App() {



  const [todo, setTodo]=useState([
    {
    id: 'todo-0',
    name: 'Eat',
    completed: true
    },
    {id: 'todo-1',  
    name: 'Sleep',
    completed: false
    },
    {
    id: 'todo-2',
    name: 'Repeat',
    completed: false
    },
  ]);
  
 const add_todo=(newTodo)=>{
  setTodo([...todo, newTodo]);
  console.log(todo);
 }
 
  return (
    <div className='todoapp stack-large'>
     <h1>TodoMatic</h1>
     <Forms add_todo={add_todo} todo={todo}/>
    <TodoFilter todo={todo} />
    </div>
  );
}

export default App;
