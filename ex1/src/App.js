
import { Form } from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import Forms from './forms';
import { RxDividerVertical } from 'react-icons/rx';
import All from './all';

function App() {
 
  const [selectedFilter, setSelectedFilter] = useState('All');
 
  return (
    <div className='todoapp stack-large'>
     <h1>TodoMatic</h1>
     

    </div>
  );
}

export default App;
