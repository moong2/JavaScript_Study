//1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals : 1 + 2 = ${1+2}`);

//2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1||value2||check()}`);

console.log(`and: ${value1&&value2&&check()}`);

// if(nullableObject != null){
//     nullableObject.something
// }

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('★');
    }
    return true;
}

console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const moong2_1 = {name: 'moong2'};
const moong2_2 = {name: 'moong2'};
const moong2_3 = moong2_1;
console.log(moong2_1 == moong2_2);
console.log(moong2_1 === moong2_2);
console.log(moong2_1 === moong2_3);

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//8. Conditional operators : if
const name = 'moong2';
if(name === 'moong2'){
    console.log('Welcome, moong2!');
}
else if(name == 'coder'){
    console.log('You are amazing coder');
}
else{
    console.log('unknown');
}

//9. Ternary operator: ?
console.log(name === 'moong2' ? 'yes' : 'no');

//10. Switch statement
const browser = 'IE';
switch(browser){
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('love you!');
        break;
    default :
        console.log('same all!');
        break;
}

//11. Loops
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

for(i = 3;i > 0 ;i--){
    console.log(`for : ${i}`);
}

for(let i = 3 ; i > 0 ; i = i - 2){
    console.log(`inline variable for : ${i}`);
}

for(let i = 0;i<10;i++){
    for (let j = 0;j<10;j++){
        console.log(`i : ${i}, j : ${j}`);
    }
}


for(let i = 0;i<=10;i++){
    if(i % 2 === 0){
        console.log(`q1 : ${i}`);
    }
}
for(let i = 0;i<11;i++){
    if(i > 8){
        break;
    }
    console.log(`q2 : ${i}`);
}