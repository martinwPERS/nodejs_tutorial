//using pipes and pipe chaining
//source readstream to a destination writeable stream

const fs = require('fs');
//module zlib to compress files
const zlib = require('zlib');
//Create a transform stream. Taking input from readstream > manipulate data 
const gunzip = zlib.createGunzip();
// to use pipes only need a 'readStream' (source) & 'writeSteam (destination)
const readStream = fs.createReadStream('./example_writeTo.gz');
const writeStream = fs.createWriteStream('unzipContents_file.txt');  //.gz is compression extention
//const writeStream = fs.createWriteStream('example_writeTo.txt');
//take readStream and pipe into gzip which is a compressed version of the readstream
//Chaining Pipes: zip data
readStream.pipe(gunzip).pipe(writeStream);


