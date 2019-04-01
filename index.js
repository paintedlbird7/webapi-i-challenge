// implement your API here
const express = require('express'); // import the express package
// equilalent to import express from 'express'

const db = require('./data/db.js'); 

// Middleware
const server = express(); // creates the server

server.use(express.json()); // addd this to make POST & PUT work 
// teaches express how to parse JSon to body

// Endpoints
server.get('/', (req, res) => {
    // Name (req, res) is not important culd be anything, position is important
    res.send('Hello World!')
    // .send() is a helper method that is part of the response object.
});

// write a get now endpoint that returns the date & time as a string
server.get('/now', (req, res) => {
    const time = new Date().toISOString();
    res.send(time);
});

// the R in CRUDS (Read)
server.get('/users', (req, res) => {
    db
    .find()
    .then (users => {
     res.status(200).json(users);   
    })
    .catch(error => {
        res.status(500).json({error: "The users information could not be retrieved." })
    })
});





// watch for connections on port 8000
// make the web server listen for incoming traffic on port 4000
server.listen(8000, () =>
    // this callback function runs after the server starts successfully.
  console.log('\n Server running on http://localhost:8000')
);



