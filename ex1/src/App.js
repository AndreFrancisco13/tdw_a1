
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
     
        <h1>Todo Matic</h1>
        <Forms/>
        <div className='filters btn-group stack-exception'></div>
        <button onClick={() => setSelectedFilter('all')} >
        All
          </button > 
          <button onClick={() => setSelectedFilter('active')}>
          Active
          </button>
          <button onClick={() => setSelectedFilter('complete')}>
          Complete
          </button>
      </div>
  <div>

    
        {selectedFilter==='All'&& (
          <button className='btn toggle-btn' aria-pressed='true' }>
          <span className='visually-hidden'>Show </span>
          <span>All</span>
          <span className='visually-hidden'> tasks</span>
        </button>
        )}
        {selectedFilter==='Active'&& (
          <button className='btn toggle-btn' aria-pressed='true'}>
          <span className='visually-hidden'>Show </span>
          <span>Active</span>
          <span className='visually-hidden'> tasks</span>
          </button>
        )}
        {selectedFilter==='Complete'&& (
          <button className='btn toggle-btn' aria-pressed='true' }>
          <span className='visually-hidden'>Show </span>
          <span>Complete</span>
          <span className='visually-hidden'> tasks</span>
          </button>
        )}
        </div>
    </div>
  );
}

export default App;
