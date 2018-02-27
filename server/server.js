const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:search', (req,res) => {
    const apiKey = process.env.apiKey;
    const search = req.params.search;
    console.log(search);
    //axios.get(`http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22`)
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${search}&units=imperial&appid=${apiKey}`)
        .then(response => {
            console.log('axios server', response.data)
            return res.send(response.data)})

        .catch(err => res.status(500).send('bad'))
})

module.exports = app;
