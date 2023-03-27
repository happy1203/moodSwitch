import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="App">
      
        <body>
          <div id='logoName'>Mood Switch</div>
          <div id='loginPage'>
            <h1 id='Welcome'>Welcome</h1>
            <p>Please enter your data to login.</p>
  
            <form className="login-form" onSubmit={handleSubmit}>
              <div id="fields">
              <input value={email}  type="email" placeholder="Email" id="email" name="email" />
              <input value={pass}  type="password" placeholder="Password" id="password" name="password" />
              </div>
              <button type="submit" id="login">Log In</button>
            </form>
  
            <button className="link-btn" id="registerHere">Don't have an account? <strong>Register here.</strong></button>
  
          </div>
        </body>
  
  
  
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </div>
    )
}
 