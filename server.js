const express = require('express');
const cors = require('cors');
const fs = require("fs");
const app = express();
const port = 3000;

app.use(cors());

app.use('/', express.static('public'));

const budget = JSON.parse(fs.readFileSync('./budget-data.json', 'utf8'));

app.get('/hello' , (req, res) => {
    res.send('Hello World!');
});

app.get('/budget' , (req, res) => {
    res.json(budget);
});

app.listen(port ,() => {
    console.log('Example app listening at http://localhost:${port}');
});