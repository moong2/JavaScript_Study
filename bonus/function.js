//1. 함수 정의와 호출
const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

function add(a, b){
    return a + b;
}

//2. 함수를 다른 변수에 할당
const doSomething = add;

const sum = doSomething(3, 4);
console.log(sum);
const sum2 = add(2, 3);
console.log(sum2);

function print(a, b){
    console.log(`${a} ${b}`);
}
print(8, 33);

//3. 함수를 다른 함수에 인자로 전달
function divide(num1, num2){
    return num1/num2;
}
function surprise(operator){
    const result = operator(2, 3);
    console.log(result);
}
surprise(divide);