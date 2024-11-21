import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exercicio1 from './components/exercicio1/App';
import Exercicio2 from './components/exercicio2/App';
import Exercicio3 from './components/exercicio3/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Home from './components/home'; 
import Exercicio4 from './components/exercicio4/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Routes>
    <Route path="/" element={<App />}>
    <Route index element={<Home />} />
      <Route path="/exercicio1" element={<Exercicio1/>} />
      <Route path="/exercicio2" element={<Exercicio2/>} />
      <Route path="/exercicio3" element={<Exercicio3/>} />
      <Route path='/exercicio4' element={<Exercicio4/>} />
      <Route path='/about' element={<About />} />
    </Route>
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
