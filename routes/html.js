const express = require('express');
const path = require('path');
const router = express.Router();


// >>>  GET /notes should return the notes.html file.

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });


//Link to test in browser : http://localhost:3001/notes
  


//---------------------------------------------------------------------------
// >>>  GET * should return the index.html file.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

//Link to test in browser : http://localhost:3001/*



module.exports = router