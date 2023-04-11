// Callback API
import * as fs from 'fs'

// Creating directory -path should be there
// fs.mkdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch7\\prateek',function(error){
//     if(error) throw error;
//     console.log("Directory ccreated...");c
// })
// Creating directory -path should be there

// if test folder is not present
// fs.mkdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch7\\test\\demo',{recursive:true},function(error){
//     if(error) throw error;
//     console.log("Directory ccreated...");
// })


//read content of the directory
// fs.readdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch7\\test',function(error,files){
//     if(error) throw error ;
//     for(const file of files){
//         console.log(file);
//     }
// })


// remove ddirectory-directory should be empty
// fs.rmdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch7\\test\\demo' ,function(error){
//     if(error) throw error;
//     console.log("Direcctory Removed...");
// })


// creating and writing file 
// fs.writeFile('readme.txt','hello node js',function(error){
//     if(error) throw error;
//     console.log('file created..');
// })

// Read file
fs.readFile('readme.txt','utf-8',function(error,data){
    if(error) throw error;
    console.log(data);
})