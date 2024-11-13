import React from "react";
import { createContext, useState, useEffect } from "react";


 export const TodoContext = createContext();


  export const TodoProvider = ({children}) => {
 const [filter, setFilter] =useState('All');

 const [todo, setTodo] = useState( 
     [
     { id: 'todo-0', name: 'Eat', completed: true },
     { id: 'todo-1', name: 'Sleep', completed: false },
     { id: 'todo-2', name: 'Repeat', completed: false },
   ]
 );



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
    <TodoContext.Provider value={{todo, setTodo, filter, setFilter, add_todo, deleteTodo, on_check}}>
        {children}
    </TodoContext.Provider>
);


  }