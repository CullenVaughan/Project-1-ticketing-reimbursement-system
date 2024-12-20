import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import RegisterLogic from './Components/Register/RegisterLogic';
import LoginLogic from './Components/Login/LoginLogic';
import { AuthProvider, UserProvider } from './Components/Context/UserContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Register' element={<RegisterLogic />}></Route>
            <Route path='/Login' element={<LoginLogic />}></Route>
          </Routes>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;