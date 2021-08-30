//---For routes -------
const api = require('./routes/api');
const staticRoute = require('./routes/html');


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


//---For routes -------
app.use('/api', api)
app.use('/', staticRoute)



//----LISTEN PORT -------------------------------------------------
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });





