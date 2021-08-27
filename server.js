const fs = require('fs');
const path = require('path');

const express = require('express');

const PORT = process.env.PORT || 3001 ;

// To instantiate the server:
const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// this makes all public folder files available to front end
app.use(express.static('public'));


const { notes } = require('../../db/db');

//The following HTML routes should be created:
  //  GET /notes should return the notes.html file.

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

  //  GET * should return the index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

//--------------------------------------------------------------------------
//    The following API routes should be created:
  //  GET /api/notes should read the db.json file and return all saved notes as JSON.

  const { notes } = require('../../db/db.json');
  //--------------------------------------------------------------------------
  app.get('/api/notes', (req, res) => {
      let results = notes;
      res.json(results);
    });

  //  POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

  app.post('/api/notes', (req, res) => {
    
    // set id based on what the next index of the array will be
    req.body.id = // unique ID using npm package 
    ;
  });
















app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });