import React from 'react';
import Nav from './components/nav';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="app">

     <Nav />
     <Outlet />
    </div>
  );
}

export default App;
