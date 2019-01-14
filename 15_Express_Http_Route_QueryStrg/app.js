//Setup express server (web framework for node.js)
// 1. create package.json (> npm init --yes)
// 2. download express (> npm install express --save)

// When to use:
    // route parameters = must have data, required data
    // QueryString parameters = optional settings or data (i.e. using sort)

const express = require('express');  //when require getting back a functions
const app = express(); //this function will return an object with methods to be used

//1 arg = route (index or homepage is '/'),2 arg=call back function (request and response), 
app.get('/',(req,res)=>{
    res.send('Hello World');
});

// App route
app.get('/example',(req,res)=>{
    res.send('hitting example router'); //http://localhost:3000/example
});

// App route parameters
app.get('/example/:name/:age',(req,res)=>{  //looking to get value from use of "/:name" and "/:age"
    console.log(req.params); //get list of param values
    //res.send('example with route params');  //pass string 
    res.send(req.params.name + " : " + req.params.age); //print out passed values to screen
}); // http://localhost:3000/example/martin/99  > will create object with values
    // "martin" in name param value and "99" is age param value
    // console output = {name: 'martin, age: '99'}

// App route query string
app.get('/exampleqstring/:name/:age',(req,res)=>{  //looking to get value from use of "/:name" and "/:age"
    console.log(req.params); //get list of param values separated with "/"
    console.log(req.query); // uses "?" in query string, nameOfQueryString=Value "?tutorial=paramstutorial"
                            // use "&" to add more than one querystring parameter
    res.send(req.params.name + " : " + req.params.age); //print out passed values to screen
}); // http://localhost:3000/exampleqstring/martin/99?tutorial=paramstutorial
    // browser output = martin : 99
    // console output = 
           // { name: 'martin', age: '99' }
           // { tutorial: 'paramstutorial' }
    //http://localhost:3000/exampleqstring/martin/99?tutorial=paramstutorial&sort=byage

//give port to listen on  (http://localhost:3000/)
app.listen(3000);

//start server at command prompt > node app