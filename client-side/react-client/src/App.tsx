import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import RegisterLogic from './Components/Register/RegisterLogic';


function App() {
  return (
    <div className="App">

      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Register' element={<RegisterLogic />}></Route>
      </Routes>

    </div>
  );
}

export default App;