// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {React, useState} from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Music } from "./Music";
import { Dashboard } from "./Dashboard";
import { Podcast } from './Podcast';
import { Book } from './Book';
import { Wellness } from './MentalWellness';
import { Route, Routes } from "react-router-dom"; 
import { EmailContext } from './emailContext';
import { NameContext } from "./nameContext";


function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  return (
    <NameContext.Provider value={{name, setName}}>
    <EmailContext.Provider value={{email, setEmail}}>
      <div className="App">
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="music" element={<Music />}/>
          <Route path="podcast" element={<Podcast />}/>
          <Route path="book" element={<Book />}/>
          <Route path="wellness" element={<Wellness />}/>
      </Routes> 
      </div>
    </EmailContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
