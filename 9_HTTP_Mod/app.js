//create an HTTP Server using HTTP module.

const http = require('http');
//------------------------------------------
//1. create http server object method
// const server = http.createServer((req,res)=>{
//     res.write('Hello World from Nodejs');
//     res.end();

// });

// //Tell what server port to listen on (http://localhost:3000)
// server.listen('3000');
//-------------------------------------------
//add different routes based on request
//1. create http server object method only display if from root domain
const server = http.createServer((req,res)=>{
    if(req.url === '/'){ //if using root domain = http://localhost:3000
    res.write('Hello World from Nodejs');
    res.end();
    }
    else{  //if not using root domain = http://localhost:3000/banana
        res.write('using some other domain');
        res.end();
    }

});

//Tell what server port to listen on  (http://localhost:3000)
server.listen('3000');
