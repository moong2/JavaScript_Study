//1. Function declaration
function printHello(){
    console.log('Hello');
};
printHello();

function log(message){
    console.log(message);
};
log('Hello@');
log(1234);

//2. Parameters
function changeName(obj){
    obj.name = 'coder';
};
const moong2 = {name : 'moong2'};
changeName(moong2);
console.log(moong2);

//3. Default parameters
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
};
showMessage('Hi!');

//4. Rest parameters
function printAll(...args){
    for(let i = 0; i<args.length;i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg)=>console.log(arg));
};
printAll('sejongUniv', 'software', 'moong2');

//5. Local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
};
printMessage();

//6. Return a value
function sum(a, b){
    return a + b;
};
const result = sum(1, 2);
console.log(`sum : ${sum(1,2)}`);

//7. Early return, early exit
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
};


//1. Function expression
const print = function(){
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
    console.log('yes!');
};
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// const simplePrint = function(){
//     console.log('simplePrint!');
// };
const simplePrint = ()=>console.log('simplePrint!');
const add = (a, b)=>a+b;
const simpleMultiply = (a, b)=>{
    //do something
    return a*b;
};

(function hello(){
    console.log('IIFE');
})();



function calculate(command, a, b){
    let result;
    switch(command){
        case 'add' :
            return a + b;
        case 'substract' :
            return a - b;
        case 'divide' :
            return a / b;
        case 'multiply' :
            return a * b;
        case 'remainder' : 
            return a % b;
        default :
            console.log('command is wrong!');
            return '';
    }
}
console.log(calculate('divide', 2, 3));