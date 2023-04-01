// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useState } from "react";
import axios from 'axios';
import { MyCalendar } from './Calendar'; 

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loginStatus, setLoginStatus] = useState("");

    const login = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/login", {
        email: email,
        password: pass,
      })
      window.location.href = "/Calender";
    }

    return (
        <div className="App">
        <body>
          <div id='logoName'>Mood Switch</div>
          <div id="container"> 
          <div id='loginPage'>
            <h1 id='Welcome'>Welcome</h1>
            <p>Please enter your data to login.</p>
  
            <form className="login-form">
              <div id="fields">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
              <input value={pass}  onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
              </div>
              <button onClick={login} type="submit" id="login">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')} className="link-btn" id="registerHere">Don't have an account? <strong>Register here.</strong></button>
          </div>
          </div>
        </body>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </div>
    )
}

export default Login;