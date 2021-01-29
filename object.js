'use strict';

//1. Literals and properties
const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const moong2 = {name : 'moong2', age : 22};
print(moong2);

moong2.hasJob = false;
console.log(moong2.hasJob);

delete moong2.hasJob;
console.log(moong2.hasJob);

//2.Computed properties
console.log(moong2.name);
console.log(moong2['name']);
moong2['hasJob'] = false;
console.log(moong2.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(moong2, 'name');
printValue(moong2, 'age');

//3. Property value shorthand
const person1 = {name : 'Jeongmin', age : 22};
const person2 = {name : 'Sooyeon', age : 24};
const person3 = {name : 'hansl', age : 23};
const person4 = new Person('moong2', 22);
console.log(person4);

//4. Constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

//5. in operator : property existence check (key in obj)
console.log('name' in moong2);
console.log('age' in moong2);
console.log('random' in moong2);
console.log(moong2.random);

//6. for..in vs for..of
for (let key in moong2){
    console.log(key);
}

const array = [1, 2, 4, 5];
for(let value of array){
    console.log(value);
}

//7. Fun cloning
const user = {name : 'moong2', age : '22'};
const user2 = user;
user2.name = 'coder';
console.log(user);

const user3 = {};
for(let key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);