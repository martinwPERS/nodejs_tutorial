//read and write data in streams

const fs = require('fs');
// Read stream
const readStream = fs.createReadStream('./exampledata.txt','UTF8');
const writeStream = fs.createWriteStream('example_writeTo.txt');
//Readstream listens to the EventsEmitter Class and will read in a chunk of data
readStream.on('data',(chunk)=>{
    //beneift of 'chuck' is that as I receive data I can quickly do something with it before whole file is loaded
    //console.log(chunk);
    writeStream.write(chunk);
});
//1:00:33