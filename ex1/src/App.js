
import './App.css';
import React, {useEffect, useState} from 'react';
import Forms from './forms.js';
import TodoFilter from './todoFilter.js';
import ListTodo from "./listTodo";


function App() {

  const [filter, setFilter] =useState('All');

  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem('todo');
    return savedTodo ? JSON.parse(savedTodo) : [
      { id: 'todo-0', name: 'Eat', completed: true },
      { id: 'todo-1', name: 'Sleep', completed: false },
      { id: 'todo-2', name: 'Repeat', completed: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

 
 const add_todo=(newTodo)=>{
  setTodo([...todo, newTodo]);
  console.log(todo);
 }

 const deleteTodo=(id)=>{
  const newList = todo.filter((todo) => todo.id !== id);
  setTodo(newList);
 }

 const on_check=(id)=>{
  const updateChecked = todo.map((todo)=>{
    if (todo.id === id) {
      return {...todo, completed: !todo.completed}
    }
    return todo;  
  });
  setTodo(updateChecked);
 }
 
  return (
    <div className='todoapp stack-large'>
     <h1>TodoMatic</h1>
     <Forms add_todo={add_todo} todo={todo} />
     <TodoFilter todo={todo} filter={filter} setFilter={setFilter} />
     <ListTodo todo={todo} filter={filter} deleteTodo={deleteTodo} on_check={on_check}/>
    </div>
  );
}

export default App;
