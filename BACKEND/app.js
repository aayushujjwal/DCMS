const express = require('express');
const mysql2 = require ('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create connection
const db = mysql2.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    database : 'dcms'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql2 Connected...');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO USER(`USERNAME`, `PASSWORD`, `EMAIL`, `PHONE_NO`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.password,
        req.body.email,
        req.body.phone
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `EMAIL` = ? AND `PASSWORD` = ?";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Invalid");
        }
    })
})

app.listen('8081', () => {
    console.log('Server started on port 8081');
});
