
import './App.css';
import React, {useEffect, useState} from 'react';
import Formulario from './formulario.js';
import FazerFilter from '../exercicio1/fazerFilter.js';
import ListFazer from "./listFazer.js";


function Exercicio1() {

  const [filtrar, setFiltrar] =useState('All');

  const [fazer, setFazer] = useState(() => {
    const salvarFazer = localStorage.getItem('fazer');
    return salvarFazer ? JSON.parse(salvarFazer) : [
      { id: 'fazer-0', name: 'Eat', completed: true },
      { id: 'fazer-1', name: 'Sleep', completed: false },
      { id: 'fazer-2', name: 'Repeat', completed: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('fazer', JSON.stringify(fazer));
  }, [fazer]);

 
 const add_fazer=(newFazer)=>{
  setFazer([...fazer, newFazer]);
  console.log(fazer);
 }

 const deleteFazer=(id)=>{
  const newList = fazer.filter((fazer) => fazer.id !== id);
  setFazer(newList);
 }

 const on_check=(id)=>{
  const updateChecked = fazer.map((fazer)=>{
    if (fazer.id === id) {
      return {...fazer, completed: !fazer.completed}
    }
    return fazer;  
  });
  setFazer(updateChecked);
 }
 
  return (
    <div className='todoapp stack-large'>
     <h1>fazerMatic</h1>
     <Formulario add_fazer={add_fazer} fazer={fazer} />
     <FazerFilter filtrar={filtrar} setFiltrar={setFiltrar} />
     <ListFazer fazer={fazer} filtrar={filtrar} deleteFazer={deleteFazer} on_check={on_check}/>
    </div>
  );
}

export default Exercicio1;
