import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import axios from 'axios';
import { Navbar } from './Navbar.js';
import { useSearchParams } from "react-router-dom";

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

    const [searchParams, setSearchParams] = useSearchParams();
    
    const mood = (e) => {
        axios.post("http://localhost:3001/dashboard", {
            mood: myMood,
            email: email, //placeholder value for now
        });
        console.log(myMood + ", " + searchParams.get("username")
        );

    }


    return (
        <html style={{backgroundColor: 'white'}}>
            <Navbar /> 
            <div style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '3%', paddingBottom: '8%'}}>
                <div id='allHeaderInfo'>
            <div id='welcomeHeader'>Welcome, {searchParams.get("username")} 👋</div>
            <div style={{fontSize: '20px',
                        fontWeight: '500',
                        marginBottom: '50px',
                        color: '#588A7E'}} >Feel free to select an activity from below!</div>
                        </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3" align='center'>
                        {/* <img src={music} onClick={routeMusic}></img> */}
                        <a><img onClick={routeMusic} src={music}  style={{width: '80%'}}></img></a>

                    </div>
                    <div className="col-sm-3" align='center'>
                        <img src={podcast} onClick={routePodcast} style={{width: '80%'}}></img>
                    </div>
                    <div className="col-sm-3" align='center'>
                        <img src={mentalWelness} onClick={routeWellness} style={{width: '80%'}}></img>
                    </div>
                    <div className="col-sm-3" align='center'>
                        <img src={book} onClick={routeBook} style={{width: '80%'}}></img>
                    </div>
                </div>
            </div>
            
            <div id='allHeaderInfo'>
            
            <div id='welcomeHeader' style={{marginTop: '200px'}}>Daily Journal 📔</div>
            <div style={{fontSize: '25px',
                        fontWeight: '500',
                        marginBottom: '50px',
                        color: '#588A7E'}} >How are you feeling?</div>
                        </div>
            {/* <h1>PLEASE DOUBLE CLICK HERE!!</h1> */}

            <div className="container">
                <div className="row">
                    <div className="col-sm " align='center'>
                        {/* <img src={music} onClick={routeMusic}></img> */}
                        <a> <img src={badMood}  onClick={() => {
                setMood("");
                setMood("BAD");
                mood("Bad");}} style={{width: '85%'}}></img></a>
                    </div>
                    <div className="col-sm " align='center'>
                    <img src={notGood}  onClick={() => {
                setMood("");
                setMood("NOT GREAT");
                mood();}} style={{width: '85%'}}></img>
                    </div>
                    <div className="col-sm " align='center'>
                    <img src={okay}  onClick={() => {
                setMood("");
                setMood("OKAY");
                mood();}} style={{width: '85%'}}></img>
                    </div>
                    <div className="col-sm " align='center'>
                    <img src={good}  onClick={() => {
                setMood("");
                setMood("GOOD");
                mood();}} style={{width: '85%'}}></img>
                    </div>
                    <div className="col-sm " align='center'>
                    <img src={excellent}  onClick={() => {
                setMood("");
                setMood("EXCELLENT");
                mood();}} style={{width: '85%'}}></img>
                    </div>
                </div>
            </div>



           
            
            
            
           
            
           

            <div id='calendar-body'>
                <Calendar onChange={onChange} value={value}/>
            </div>
            </div>

        </html>
    );
};

