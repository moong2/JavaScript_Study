'use strict';

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

//3. Looping over an array
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit))


//4. Addition, deletion, copy
fruits.push('🍓','🍑');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

fruits.unshift('🍓','🍑');
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits);

fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

const fruits2 = ['🍍', '🥝'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍈'));

fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

for (let elem of fruits.reverse()){
    console.log(elem);
}

