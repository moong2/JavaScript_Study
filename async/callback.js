'use strict';

console.log('1');
setTimeout(()=>console.log('2'), 1000);
console.log('3');

//Synchronous callback
function printImmediatley(print){
    print();
}
printImmediatley(()=>console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

//callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if((id === 'moong2' && password === 'sejong') || (id === 'university' && password === 'software')){
                onSuccess(id);
            }
            else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'moong2'){
                onSuccess({name : 'moong2', role : 'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>{console.log(error)}
        );
    },
    error=>{console.log(error)}
);