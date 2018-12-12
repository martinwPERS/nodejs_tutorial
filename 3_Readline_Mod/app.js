//prompt user and get user input --'readline' interface is an instance of the eventEmitter class
const readline = require('readline');
//create instance of readline interface
//object w/2 properties basically configuration file; 'process' is global object dont need to 'require'
const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});

//generate random numbers between 1 and 10
let num1 = Math.floor((Math.random() * 10) +1);
let num2 = Math.floor((Math.random() * 10) +1);
//answer
let answer = num1 + num2;

//ask user : 2 args (1 string, 2 function to get user input)
rl.question(`What is ${ num1 } + ${ num2 }?\n`,
(userInput)=>{
    //display user input
    //console.log(userInput);
    //Test user input
    if(userInput.trim() == answer){
    //If correct then close readline
    rl.close();
    }
    //check if incorrect answer
    else{
        //set the prompt
        rl.setPrompt('Incorrect response please try again... \n');
        //call the prompt
        rl.prompt();
        //add listener to rl input w/call back
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer)
                rl.close();
            else{
                rl.setPrompt(`Your answer of ${ userInput } is incorrect...try again\n`);
                rl.prompt();
            }
        })
        //decide what to do with user input
    }

});

//add lister to close event will callback event 'console.log' msg
rl.on('close',()=>{
    console.log('Correct Answer!');
});