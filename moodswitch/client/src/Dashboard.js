import Calendar from "react-calendar";
import React, { useState, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import axios from "axios";
import { Navbar } from "./Navbar.js";
import { EmailContext } from './emailContext';
import { NameContext } from "./nameContext";
import { useNavigate } from 'react-router';


//image imports
import badMood from "./logos/badMood.png";
import notGood from "./logos/notGood.png";
import okay from "./logos/okay.png";
import good from "./logos/good.png";
import excellent from "./logos/excellent.png";
import music from "./logos/music.png";
import podcast from "./logos/podcast.png";
import book from "./logos/book.png";
import mentalWelness from "./logos/mentalWellness.png";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { email } = useContext(EmailContext);
  const { name } = useContext(NameContext);
  const [value, setValue] = useState(new Date());
  const [myMood, setMood] = useState("");

  const onChange = (date) => {
    setValue(date);
  };

  const routeMusic = () => {
    navigate('/music');
  };

  const routePodcast = () => {
    navigate('/podcast');
  };

  const routeWellness = () => {
    navigate('/wellness');
  };

  const routeBook = () => {
    navigate('/book');
  };

  const mood = (e) => {
    axios.post("http://localhost:3001/dashboard", {
      mood: myMood,
      email: email,
    })
  };

  return (
    <html style={{ backgroundColor: "#F8F9FD" }}>
      <Navbar />
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "3%",
          paddingBottom: "8%",
        }}
      >
      <div class="row" align="center" style={{ marginBottom:'50px'}}>
  <div class="col-sm" align="center">
    <div class="card" style={{ padding:'40px'}}>
      <div class="card-body" >
      <div id="allHeaderInfo">
          <div id="welcomeHeader">
            Welcome, {name} 👋
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "50px",
              color: "#588A7E",
            }}
          >
            Feel free to select an activity from below!
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3" align="center">
              {/* <img src={music} onClick={routeMusic}></img> */}
              <a>
                <img className="activityIcon"
                  onClick={routeMusic}
                  src={music}
                  style={{ width: "70%" }}
                ></img>
              </a>
              <div id="activityLabel">Music</div>
            </div>
            <div className="col-sm-3" align="center">
              <img className="activityIcon"
                src={podcast}
                onClick={routePodcast}
                style={{ width: "70%" }}
              ></img>
               <div id="activityLabel">Podcast</div>
            </div>
            <div className="col-sm-3" align="center">
              <img className="activityIcon"
                src={mentalWelness}
                onClick={routeWellness}
                style={{ width: "70%" }}
              ></img>
               <div id="activityLabel">Wellness & Activities</div>
            </div>
            <div className="col-sm-3" align="center">
              <img className="activityIcon"
                src={book}
                onClick={routeBook}
                style={{ width: "70%" }}
              ></img>
               <div id="activityLabel">Articles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   
</div>

      
       

        <div class="row" >
          <div class="col-sm-8">
            <div class="card" style={{ height:'480px', padding: '40px'}}>
              <div class="card-body" style={{alignItems:'center', display:'flex', flexWrap:'wrap', alignContent:'center', flexDirection:'column', justifyContent:'center'
            }}>
                <div id="allHeaderInfo">
                  <div id="welcomeHeader"  >
                    Daily Journal 📔
                  </div>
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      marginBottom: "50px",
                      color: "#588A7E",
                    }}
                  >
                    How are you feeling?
                  </div>
                </div>


                <div className="container">
                  <div className="row">
                    <div className="col-sm " align="center">
                      {/* <img src={music} onClick={routeMusic}></img> */}
                      <a>
                        <img className="moodIcon"
                          src={badMood}
                          onClick={() => {
                            setMood("BAD");
                            mood();
                          }}
                          style={{ width: "85%" }}
                        ></img>
                      </a>
                    </div>
                    <div className="col-sm " align="center">
                      <img className="moodIcon"
                        src={notGood}
                        onClick={() => {
                          setMood("NOT GREAT");
                          mood();
                        }}
                        style={{ width: "85%" }}
                      ></img>
                    </div>
                    <div className="col-sm " align="center">
                      <img className="moodIcon"
                        src={okay}
                        onClick={() => {
                          setMood("OKAY");
                          mood();
                        }}
                        style={{ width: "85%" }}
                      ></img>
                    </div>
                    <div className="col-sm " align="center">
                      <img className="moodIcon"
                        src={good}
                        onClick={() => {
                          setMood("GOOD");
                          mood();
                        }}
                        style={{ width: "85%" }}
                      ></img>
                    </div>
                    <div className="col-sm " align="center">
                      <img className="moodIcon"
                        src={excellent}
                        onClick={() => {
                          setMood("EXCELLENT");
                          mood();
                        }}
                        style={{ width: "85%" }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{ height:'480px'}}>
              <div class="card-body" style={{alignItems:'center', display:'flex', flexWrap:'wrap', alignContent:'center', flexDirection:'column', justifyContent:'center'
            }}>
                <div id="calendar-body">
                  <Calendar onChange={onChange} value={value} />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </html>
  );
};
