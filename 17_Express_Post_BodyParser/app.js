//POST request are typically used when working with forms (email address and password fields)
// 1. create package.json (> npm init --yes)
// 2. download express (> npm install express --save)
// 3. download body-parser (> npm install body-parser)

// 12/26 : 1:54:39  --switching to freecodecamp to work on forms, create a login form

const express = require('express');  //when require getting back a functions
const path = require('path');  //path module
const app = express(); //this function will return an object with methods to be used
//1arg= alais for 'static' folder, 2arg= middleware function
app.use('/public',express.static(path.join(__dirname,'static')));   //"use" states that using middleware and to browser 'static' renamed to 'public'

//1 arg = route (index or homepage is '/'),2 arg=call back function (request and response), 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','htmlpublisher-wrapper.html'));
});

//give port to listen on  (http://localhost:3000/)
app.listen(3000);

//start server at command prompt > node app