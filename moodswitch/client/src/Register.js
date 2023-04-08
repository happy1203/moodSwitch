// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useState, useContext } from "react";
import axios from "axios";
import { EmailContext } from './EmailContext';

export const Register = () => {
    const { email, setEmail } = useContext(EmailContext);
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {
          email: email,
          username: name,
          password: pass,
        })
        window.location.href="/dashboard";
    }

    const routeLogin = () => {
      window.location.href="/login";
    }
      
    return (
        <div className="App">
          <body>
          <div id='logoName'>Mood Switch</div>
          <div id="container"> 
            <div id='loginPage'>
              <h1 id='Welcome'>Register</h1>
              <p>Please enter your data to register.</p>  
              <form className="login-form">
                <div id="fields">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" /> 
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" id="name" name="name" />
                  <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                </div>
                <button onClick={register} type="submit" id="login" >Register</button>
              </form>
              <button onClick={routeLogin} className="link-btn" id="registerHere">Already have an account? <strong>Login here.</strong></button>
            </div>
            </div>
          </body>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          </style>
        </div>
    );
}

