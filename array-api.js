'use strict';

//Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

//Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒'
    const result = fruits.split(',');
    console.log(result);
}

//Q3. make this array look like this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

//Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2);
    console.log(result);
}

//
class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 38, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66), 
    new Student('E', 18, true, 88),
];

//Q5. find a student with the score 90
{
    console.log(students.find((student)=>student.score === 90))
}
//Q6. make an array of enrolled students
{
    const result = students.filter((student)=>student.enrolled === true)
    console.log(result);
}
//Q7. make an array containing only the students' scores
{
    const result = students.map((student)=>student.score);
    console.log(result);
}
//Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student)=>student.score < 50);
    console.log(result);
}
//Q9. compute students' average score
{
    const result = students.reduce((prev, curr)=> prev + curr.score, 0);
    console.log(result/students.length);
}
//Q10. make a string containing all the scores
{
    const result = (students.map(student=>student.score)).join();
    console.log(result);
}
//Bonus
{
    //ascending
    const result = (students.map(student=>student.score)).sort((a, b)=>a - b).join();
    console.log(result);
    //descending
    const result2 = (students.map(student=>student.score)).sort((a, b)=>b - a).join();
    console.log(result2);
}