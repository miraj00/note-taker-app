const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();



// >>>  GET /api/notes should read the db.json file and return all saved notes as JSON. ---------------
  
 
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../data/db.json'));
    });
 
//Link to test in browser : http://localhost:3001/api/notes   


//---------POST ROUTE ----------------------------------------------------------------------------------
var read = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/db.json')), "utf8");   // reads and parse the json file
  };
  
    // write in db.json file -------------
  router.post('/notes', (req, res) => {
  
    // UUID to generate random ID ---------------------
      const uuidv1 = require('uuidv1');
      var userID=uuidv1(); 
      
      const { title, text } = req.body;
      const addedNote = { title: title, text: text, id: userID };    //adding ID -----
      
      const oldNotes = read(); // Read notes data and save to variable
      oldNotes.push(addedNote);
      
    // Adding the new note to the array of old notes -------
      fs.writeFileSync(path.join(__dirname, '../data/db.json'), JSON.stringify(oldNotes)); // Re-writing variable (after the note has been added)
      console.log("New note ADDED");
      res.json(true);
      
  })
  
  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  // You'll need to find a way to give each note a unique id when it's saved 
  // (look into npm packages that could do this for you).
 //--------delete notes----------------------------------------------------------------------------
   
  router.delete('/notes/:id', function (req, res) {
    console.log("Note DELETED ")
  
    // read 
    const delNotes = read();
    // delete the one with id assigned
    const result = delNotes.filter(delnote => delnote.id !== req.params.id);
    // write back to db.json
    fs.writeFileSync(path.join(__dirname, '../data/db.json'), JSON.stringify(result));
  
    res.json(true);
  })




module.exports = router