const EventEmitter = require( 'events' );
const eventEmitter = new EventEmitter();

//1. Setup listener w/ 'tutorial is the listner event
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log('turorial event has occurred');
    console.log(num1 + num2);
});

//2. emit a tutorial event
eventEmitter.emit('tutorial',3,4);

//Extend the events emitter
class Person extends EventEmitter{
    constructor(name){
        super(); //super allows to use the 'this' in a class
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

//Create new instance of Person class
let pedro = new Person('Pedro');
let staks = new Person('Staks');

//1. Setup listener
pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
});
staks.on('name',()=>{
    console.log('my name is ' + staks.name);
});
//2. Emit the event to occur
pedro.emit('name');
staks.emit('name');

