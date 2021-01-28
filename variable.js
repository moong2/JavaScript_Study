//1.strict
'use strict';

//2.Variable
let globalName = 'global name';
{
let name = 'moong2'
console.log(name);
name = 'moooong2'
console.log(name);
}
console.log(name);
console.log(globalName);

//3.Contants
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
const count = 17;
const size = 17.1;

console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


let x;
console.log(`value: ${x}, type: ${typeof x}`);


const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); 


// const moong2 = {name : 'moong2', age = 20};
// moong2.age = 22;


//5.Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));    //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));