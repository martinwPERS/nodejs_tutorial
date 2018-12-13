const fs = require ('fs');

//make directory
// fs.mkdir('testFolder',(err)=>{
//     if (err)
//         console.log(err);
//     else{   
//         console.log('folder successfully created');
//     }
// });

//delete directory
// fs.mkdir('testFolder2',(err)=>{
//     if (err)
//         console.log(err);
//     else{  
//         //remove folder 
//         fs.rmdir('testFolder2',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('Successfully deleted the folder');
//             }
//         })
//         console.log('folder successfully created');
//     }
// });

//create a folder then create a file in the folder
// fs.mkdir('testFolder3',(err)=>{
//     if (err)
//         console.log(err);
//     else{  
//         fs.writeFile('./testfolder3/example.txt','test data for created file',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('successfully created file');
//             }
//         })
//     }
// });

//Delete folder that contains a file
//First delete file 
// fs.unlink('./testfolder3/example.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         //Second delete the folder
//         fs.rmdir('testFolder3',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('Successfully deleted the folder');
//                 }
//         })
//     }
// });

//Delete folder that contains multiple files
//First : read files in directory
// 3 args: folder name, callback functions, array with name of files
fs.readdir('testfolder4',(err,files)=>{
    if(err)
        console.log(err);
    else{
        //list files in array
        console.log(files);
        //loop thru file
        for(let file of files){
            fs.unlink('./testFolder4/' + file,(err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log(`Successfully deleted file = ${file}`);
                }
            })
        }
    }


});
