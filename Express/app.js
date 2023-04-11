//http module 
import http from 'http';


const server =http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');
    res.end('Response from  server 23s0');
});
const PORT=process.env.PORT || 8000;
const HOST='localhost';
// server.get('/' , (req , res) =>{
//     res.send("Hello World");
// })
server.listen(PORT,HOST,()=>{
    console.log("server rungggsninggg at http://localhost:8000");
}); 
