Note-Taker-App

## Description :

The client requested to create Note Taker Application that can be used to write and save notes. This application will use an server side Express.js and will save and retrieve note data from a JSON file.

```
* The requirement from small business owner include as below :

1. When user opens the Note Taker, it presents a landing page with a link to a notes page
1. User should be able to write and save notes
1. Existing notes should be presented on left-hand column and empty field on the right to enter a new note title and text 
1. When writing a note, save icon should appear on top right corner
1. When user clicks on save button, the note should appear in left-hand column underneath existing notes
1. When user clicks on existing notes, the note appear in right hand column.
1. When user clicks on write icon on the top right corner, it presents empty field to enter new note
```

## Languages and other components used : 
```
   * Node.js 
   * FS (File systems: readFileSync, writeFileSync) 
   * npm (node package manager) 
   * Expess.js server ( Node based web server ) 
   * routes ( GET, POST, DELETE ) 
   * Heroku ( to deploy the server )
   * middleware ( to accept incoming data )
```

## How to install : 
 ```
 To install the application in your computer follow the steps below: 
 
 1. Clone the repository in your computer :
    - open the command line and go to the directory where you want to clone the repository.
    - then clone the repo by typing : " git clone git@github.com:miraj00/note-taker-app.git "

 2. Install node.js on your computer by going to https://nodejs.org/en/  
 
 3. Once node.js is installed, type "npm init" on the cammand line Terminal at root directory.
    - This will initiate npm packages

 4. Create Express.js server by typing : "npm install express" on the command line

       After that, you can run " npm start " in terminal's root directory and make sure it shows the message " API server now on port 3001! " in the console.

                 
 6. Once above steps are done, the application is ready to use.
```
## How to use application :
``` 
Go to following links in web-browser to acess the Note-Taker-app :

https://lit-cliffs-71084.herokuapp.com/

```
## Below is the screenshot and Deployed application of the Project as per client request ## 

![Screenshot of web page](./public/assets/images/screenshot.png)

![Screenshot of web page](./public/assets/images/screenshot2.png)


[Please click here to deploy application in Github](https://github.com/miraj00/note-taker-app)