import EventEmitter from "events";

// creating class 
class Myemitter extends EventEmitter{ }

//creating object
const myemitter=new Myemitter();  

//Example 1
//register Event Listner
myemitter.on('event',()=>{
    console.log('An event occured !')
})

// trigger event
myemitter.emit('event');
myemitter.emit('event');