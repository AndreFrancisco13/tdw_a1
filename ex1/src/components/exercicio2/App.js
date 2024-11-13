
import './App.css';
import Forms from './forms.js';
import TodoFilter from '../exercicio2/todoFilter.js';
import ListTodo from "./listTodo";
import { TodoProvider } from './context.js';

function Exercicio2() {

 
  return (
    <div className='todoapp stack-large'>
     <h1>TodoMatic</h1>
     <TodoProvider>
     <Forms  />
     <TodoFilter  />
     <ListTodo />
     </TodoProvider>
    </div>
  );
}


export default Exercicio2;




