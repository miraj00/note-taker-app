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


//The following HTML routes should be created:
  // 1 >>>  GET /notes should return the notes.html file.

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../note-taker-app/public/notes.html'));
  });

//Link to test in browser : http://localhost:3001/notes
//--------------------------------------------------------------------------
//The following API routes should be created:
  // 2 >>>  GET /api/notes should read the db.json file and return all saved notes as JSON.
  
 //  const { notes } = require('./db/db');
  // const { fileURLToPath } = require('url');
  
   app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
    //res.json(notes);
   //  res.send('Hello');
    });
 
//Link to test in browser : http://localhost:3001/api/notes    
//---------------------------------------------------------------------------
//The following HTML routes should be created:
// 3 >>>  GET * should return the index.html file.
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, './public/index.html'));
    });
  
//Link to test in browser : http://localhost:3001/*
//-----------------------------------------------------------------------
  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  // You'll need to find a way to give each note a unique id when it's saved 
  // (look into npm packages that could do this for you).

//const uuidv1 = require('uuid');
// const { text } = require('express');

  // 1) function for : random ID --------------------------------------------- 
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  var userID=uuid(); //something like: "ec0c22fa-f909-48da-92cb-db17ecdb91c5" 


  // 2) write in db.json file ------------------------------------------------
  app.post('/api/notes', (req, res) => {
    
     const { title, text } = req.body;
     const addedNote = { title: title, text: text, id: userID };
    //                                                     console.log (addedNote);
     const data = JSON.stringify(addedNote, null, 2);
                                                           console.log(data);
    fs.writeFileSync("./db/db.json", data);
    
   // readBack();
  })
//---------------------------------------------------------
  
  // 3)  read db.json
  // function readBack () {
  //   const notes = JSON.parse(fs.readFileSync("./db/db.json"), "utf8");

  //                                                     console.log(notes);
  //   res.json(notes);
  // }  

//const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "./db/db.json"), "utf8"));

//                                                        console.log(notes);

  


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });