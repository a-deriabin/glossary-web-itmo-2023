const express = require('express');

const PORT = 4343;


const app = express();


const data = require('./glossary.json')


app.get('/glossary/', ((req, res)=>{
    res.json(data)
}));


app.get('/map/', ((req, res)=>{
    res.sendFile(__dirname + '/glossary.png');
}));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}.`))
