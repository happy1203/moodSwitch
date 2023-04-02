import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import axios from 'axios';


export const Dashboard = () => {
    const [value, setValue] = useState(new Date());
    const [myMood, setMood] = useState(""); 

    const onChange = date => {
        setValue(date);
    };

    const routeMusic = () => {
        window.location.href="/music";
    };
    
    const mood = (e) => {
        console.log("mood was called");
        try {
            axios.post("http://localhost:3001/dashboard", {
              mood: myMood,
            });
            console.log(myMood);
            setMood("");
        }
        catch (error) {
            console.error(error);
            setMood("");
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home <span className="sr-only"></span></a>
                <a className="nav-item nav-link" href="#">Journal</a>
                <a className="nav-item nav-link" href="#">Habits</a>
                <a className="nav-item nav-link" href="#">Additional Resources<i class="fas fa-user"></i></a>
            </div>
            </div>
            </nav>
            <h1>Welcome Back, $PLACEHOLDER</h1>
            <i class="fas fa-user" onClick={routeMusic}></i>
            <h3>Daily Journal</h3>
            <h5>How are you feeling today?</h5>
            <button onClick={() => {
                setMood("BAD");
                mood();}}>Bad</button>

            <button onClick={() => {
                setMood("NOT GREAT");
                mood();}}>Not Great</button>

            <button onClick={() => {
                setMood("OKAY");
                mood();}}>Okay</button>

            <button onClick={() => {
                setMood("GOOD");
                mood();}}>Good</button>

            <button onClick={() => {
                setMood("EXCELLENT");
                mood();}}>Excellent</button>

            <div id='calendar-body'>
                <Calendar onChange={onChange} value={value}/>
            </div>
        </>
    );
};

