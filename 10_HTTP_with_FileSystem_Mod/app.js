//Server static files with HTTP Module
const http = require('http');
const fs = require('fs');
//---------------------------------------------
//create http server (html)
// http.createServer((req,res)=>{
//     //create readable stream
//     const readSteam = fs.createReadStream('./static/htmlpublisher-wrapper.html');
//     //write a header for response, with what kind of data to expect w/ status code = 200
//     res.writeHead(200,{'Content-type':'text/html'});
//     //pipe readstream to user (res) object
//     readSteam.pipe(res);

// }).listen(3000); //  http//localhost:3000

//---------------------------------------------

//create http server (json)
// http.createServer((req,res)=>{
//     //create readable stream
//     const readSteam = fs.createReadStream('./static/test_data_file.json');
//     //write a header for response, with what kind of data to expect w/ status code = 200
//     res.writeHead(200,{'Content-type':'application/json'});
//     //pipe readstream to user (res) object
//     readSteam.pipe(res);

// }).listen(3000); //  http//localhost:3000

//---------------------------------------------

//create http server (image - png)
http.createServer((req,res)=>{
    //create readable stream
    const readSteam = fs.createReadStream('./static/icon-alerts.png');
    //write a header for response, with what kind of data to expect w/ status code = 200
    res.writeHead(200,{'Content-type':'image/png'});
    //pipe readstream to user (res) object
    readSteam.pipe(res);

}).listen(3000); //  http//localhost:3000
