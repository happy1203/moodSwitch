import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import axios from 'axios';
import { Navbar } from './Navbar.js';

import badMood from './logos/badMood.png';
import notGood from './logos/notGood.png';
import okay from './logos/okay.png';
import good from './logos/good.png'; 
import excellent from './logos/excellent.png';
import music from './logos/music.png';
import podcast from './logos/podcast.png';
import book from './logos/book.png';
import mentalWelness from './logos/mentalWellness.png';

export const Dashboard = ({email}) => {
    const [value, setValue] = useState(new Date());
    const [myMood, setMood] = useState('');

    const onChange = date => {
        setValue(date);
    };

    const routeMusic = () => {
        window.location.href="/music";
    };

    const routePodcast = () => {
        window.location.href="/podcast";
    };

    const routeWellness = () => {
        window.location.href="/wellness";
    };

    const routeBook = () => {
        window.location.href="/book";
    };
    
    const mood = (e) => {
        axios.post("http://localhost:3001/dashboard", {
            mood: myMood,
            email: email, //placeholder value for now
        });
        console.log(myMood);
    }

    return (
        <>
            <Navbar /> 
            <h1>Welcome Back, $PLACEHOLDER</h1>
            <img src={music} onClick={routeMusic}></img>
            <img src={podcast} onClick={routePodcast}></img>
            <img src={mentalWelness} onClick={routeWellness}></img>
            <img src={book} onClick={routeBook}></img>
            <h3>Daily Journal</h3>
            <h5>How are you feeling today?</h5>
            <h1>PLEASE DOUBLE CLICK</h1>
            <img src={badMood}  onClick={() => {
                setMood("");
                setMood("BAD");
                mood();}}></img>

            <img src={notGood}  onClick={() => {
                setMood("");
                setMood("NOT GREAT");
                mood();}}></img>
            
            <img src={okay}  onClick={() => {
                setMood("");
                setMood("OKAY");
                mood();}}></img>
            
            <img src={good}  onClick={() => {
                setMood("");
                setMood("GOOD");
                mood();}}></img>
            
            <img src={excellent}  onClick={() => {
                setMood("");
                setMood("EXCELLENT");
                mood();}}></img>

            <div id='calendar-body'>
                <Calendar onChange={onChange} value={value}/>
            </div>
        </>
    );
};

