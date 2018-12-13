const fs = require('fs');
//create a file
// 1 arg: name of file, 2 arg : content, 3 arg: callback in event error happens
// fs.writeFile('example.txt',"This is an example",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('File successfully create');
//         //file name, encoding type and callback type 
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if (err)
//                 console.log(err);
//             else    
//                 console.log(file);
//         });
//     }

// });   *** ctrl + / to comment blocks of code

//rename method
// 3 args: file to rename, new file name, call back function
// fs.rename('example.txt','example_rename.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully renamed the file');


// });

//append data to file method
// 3 args: file, appended data to file, callback func
// fs.appendFile('example_rename.txt','..Appending some new data to the file',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('file successfully updated with appended data');
// });

//delete file
// 2 args: file, callback func
fs.unlink('example_rename.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Successfully deleted the file`);
});
