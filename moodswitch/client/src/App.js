// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Music } from "./Music";
import { Dashboard } from "./Dashboard";
import { Podcast } from './Podcast';
import { Book } from './Book';
import { Wellness } from './MentalWellness';
import { Route, Routes } from "react-router-dom"; 



function App() {
  const [email, setEmail] = useState('');
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Login setEmail={setEmail} email={email}/>}/>
        <Route path="dashboard" element={<Dashboard email={email}/>}/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route path="music" element={<Music />}/>
        <Route path="podcast" element={<Podcast />}/>
        <Route path="book" element={<Book />}/>
        <Route path="wellness" element={<Wellness />}/>
    </Routes> 
    </div>
  );
}

export default App;
