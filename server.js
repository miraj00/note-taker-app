const fs = require('fs');
const path = require('path');

const express = require('express');

//---For routes -------
const api = require('./routes/api')
const staticRoute = require('./routes/html')

// const { Console } = require('console');

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
app.use('/', staticRoute)
app.use('/api', api)



//----LISTEN PORT -------------------------------------------------
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });





