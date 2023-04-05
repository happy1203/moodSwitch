const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "moodswitch",
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO registration (Email, Username, Password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("SELECT * FROM registration WHERE Email = ? AND Password = ?", [email, password], 
        (err, result) => {
            if (err) { //there was an error in sending the request
                req.setEncoding({err: err});
            } else {
                if (result.length > 0) { //login was successful
                    res.send(result);
                }
                else { //the information entered was flawed but request went through
                    res.send({message: "WRONG EMAIL OR PASSWORD"})
                }
            }
        }
    )
})

app.post("/dashboard", (req, res) => {
    const mood = req.body.mood;
    const email = "testing@gmail.com"; 
    con.query("UPDATE registration SET Mood = ? WHERE Email = ?", [mood, email], 
        (err, result) => {}
    )
})

app.listen(3001, () => {
    console.log("running backend server");
})
