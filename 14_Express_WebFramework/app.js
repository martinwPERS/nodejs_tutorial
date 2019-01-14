//Setup express server (web framework for node.js)
// 1. create package.json (> npm init --yes)
// 2. download express (> npm install express --save)

const express = require('express');  //when require getting back a functions
const app = express(); //this function will return an object with methods to be used

//1 arg = route (index or homepage is '/'),2 arg=call back function (request and response), 
app.get('/',(req,res)=>{
    res.send('Hello World');
});

//give port to listen on  (http://localhost:3000/)
app.listen(3000);

//start server at command prompt > node app