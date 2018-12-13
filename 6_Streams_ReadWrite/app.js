//read and write data in streams

const fs = require('fs');
// Read stream
const readStream = fs.createReadStream('./exampledata.txt','UTF8');
//Readstream listens to the EventsEmitter Class and will read in a chunk of data
readStream.on('data',(chunk)=>{
    console.log(chunk);
});
//1:00:33