// URL module
import {URL} from 'url';

const myurl=new URL('http://www.example.com:8080/p/a/t/h?query=string#hash');

// console.log(myurl.hash);
// console.log(myurl.host);
// console.log(myurl.hostname);
// console.log(myurl.href);
// console.log(myurl.pathname);
// console.log(myurl.port);
// console.log(myurl.protocol);
// console.log(myurl.searchParams);
console.log(myurl.toString());
console.log(myurl.toJSON());





