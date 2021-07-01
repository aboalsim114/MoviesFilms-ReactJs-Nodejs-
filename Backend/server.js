const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = process.env.port || 3001;
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'alzaimer.70',
  database: 'MoviesFilms',
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('home page');
});

app.post('/users/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  res.json({ email: email, password: password });
  db.query('INSERT INTO users (email,password) VALUES(?,?) ', [email, password], (err, result) => {
    console.log('err :' + err);
  });
});

app.post('/users/Login', (req, res) => {
  const emailLog = req.body.emailLog;
  const passwordLog = req.body.passwordLog;

  db.query('SELECT * FROM users WHERE email = ? and password = ?', [emailLog, passwordLog], (err, result) => {
    result ? console.log(result) : console.log(err);
  });
});

app.listen(port, () => console.log(`connected to port ${port}`));
