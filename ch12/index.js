// creating web server -http module 
import http from 'http';


const server =http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');
    res.end('Resphhonse from server 3000');
});
const PORT=process.env.PORT || 4000;
const HOST='localhost';

server.listen(PORT,HOST,()=>{
    console.log("server running at http://localhost:8000");
});