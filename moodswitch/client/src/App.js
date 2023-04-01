// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import './App.css';
import './Calendar.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { MyCalendar } from "./Calendar";
import { Route, Routes } from "react-router-dom"; 



function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="calendar" element={<MyCalendar />}/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
    </Routes>
    </div>
  );
}

export default App;
