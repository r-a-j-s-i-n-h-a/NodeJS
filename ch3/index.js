// path module

const hath =require('path');
// console.log(hath.basename('C:/Users/Prateek/Desktop/nodejs/ch3/index.js'));
// console.log(hath.basename(__filename));
// console.log(hath.basename(__filename ,'.js'));

// console.log(hath.dirname('C:/Users/Prateek/Desktop/nodejs/ch3/index.js'));

// console.log(hath.extname(__filename));
// console.log(hath.join('/search','label','course/python','oops'));


// the last parameter(..)is instructuring path.join to go back a directory
// console.log(hath.join('/search','label','course/python','oops','..'));
// console.log(hath.join('/search','label','course/python','oops','..','..'));


// console.log(hath.join(__dirname,'code','allcode.js'));

// console.log(hath.normalize('c:\\temp\\\\foo\\bar'));
// console.log(hath.normalize('c:\\temp\\\\foo\\bar\\..\\'));

// console.log(hath.normalize('c:////temp\\\\/\\/\\foo/bar'));


// console.log(hath.parse(__filename))
// console.log(hath.parse(__filename).base)
// console.log(hath.parse(__filename).name)



console.log(hath.isAbsolute('//server'));  //true
console.log(hath.isAbsolute('\\\\server'));  //true
console.log(hath.isAbsolute('c:/foo/..'));  //true
console.log(hath.isAbsolute('c:\\foo\\..'));  //true
console.log(hath.isAbsolute('bar\\baz'));  //false
console.log(hath.isAbsolute('bar/baz'));  //false
console.log(hath.isAbsolute('.'));  //false

