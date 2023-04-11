// File Syatem-Promise API
  
// const fs=require ('fs/promise'); we cannot be used 

import * as fs from 'fs/promises'

// creating directory - path should be there 
// try{
//     await fs.mkdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch6\\prateek');
//     console.log("directory created......");
// }
// catch(error){
//     console.log(error);
// }


// if ypu want to create demo file but you don't have test folder they can do if we use recurive :true
// try{
//     await fs.mkdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch6\\test\\demo',{recursive:true});
//     console.log("directory created......");
// }
// catch(error){
//     console.log(error);
// }


// read content of directory
// try {
//   const files=  await fs.readdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch6\\test')
//   for(const file of files){
//     console.log(file);
//   }
// } catch (error) {
//  console.log(error);   
// }



// remove directory -directory should be empty

// try {
//     await fs.rmdir('C:\\Users\\Prateek\\Desktop\\nodejs\\ch6\\test\\demo');
//     console.log("remove direcctory...");
// } catch (error) {
//     console.log(error)
    
// }


// create and write in  file

// try {
//     await fs.writeFile("readme.txt",'my name is prtaeek jain');
// } catch (error) {
//  console.log(error);   
// }

// read file with buffer
// try {
//     const data=await fs.readFile('readme.txt');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// read file without buffer
// try {
//     const data=await fs.readFile('readme.txt','utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// Append data into file 
// try {
//     await fs.appendFile('readme.txt','hello prateek');
// } catch (error) {
//     console.log(error);
    
// copy file
// try {
//     await fs.copyFile('readme.txt','info.txt');
// } catch (error) {
//     console.log(error);
    
// }

// Get file 

try {
    const stats=await fs.stat("C:\\Users\\Raj\\OneDrive\\Desktop\\nodejs\\ch6>\\test\\emp.js")
    console.log(stats.isDirectory());
    console.log(stats.isFile());
} catch (error) {
    console.log(error);
}