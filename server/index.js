const path = require('path');
const express = require('express');
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: 'matthewdowell',
  host: 'localhost',
  database: 'investments',
  password: process.env.DB_PASSWORD,
  port: 5432,
})

client.connect()

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'frontend', 'dist')))

app.get('/investments', (req, res) => {
  client
    .query('SELECT * FROM investments ORDER BY total_val DESC')
    .then(results => {
        res.statusCode = 200;
        res.send(results);
      })
    .catch(err => { 
      console.error(err);
      res.sendStatus(404);
    })
})

app.post('/investments', (req, res) => {
  const {investmentName, investmentStr, accountValue, totalContribution, gains} = req.body;
  client
    .query(`INSERT INTO investments (name, total_val, contribution, gain, investment_str)
    VALUES ($1, ${accountValue}, ${totalContribution}, ${gains}, $2)`, 
    [investmentName, investmentStr])
    .then(() => { res.sendStatus(201); })
    .catch(err => { 
      console.error(err);
      res.sendStatus(404);
    })
})
 

app.listen('3000', () => {
  console.log('listening on 3000')
});