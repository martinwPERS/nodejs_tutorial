//what happens when reading a large file (1GB +)

const fs = require('fs');
//readFile uses a whole buffer when reading a file
// fs.readFile('./largefile.txt',(err,file)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(file);
//     }    
// });

//readStream of chunks of data not entire file vs readfile method
const readStream = fs.createReadStream('./largefile.txt','UTF8');
readStream.on('data',(chunk)=>{
    console.log(chunk);
});