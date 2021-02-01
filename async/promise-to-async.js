//callback Hell example
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}
class UserStorage{
    async loginUser(id, password){
        await delay(3000);
        if((id === 'moong2' && password === 'sejong') || (id === 'university' && password === 'software')){
            return id;
        }
        else{
            throw 'error';
        }
    }
    async getRoles(user){
        await delay(3000);
        if(user === 'moong2'){
            return {name : 'moong2', role : 'admin'};
        }
        else{
            throw 'error';
        }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function getUserData(){
    try{
        console.log(1)
        const loginUserPromise = userStorage.loginUser(id,password)
        const getRolesPromise = userStorage.getRoles(id);
        const loginUserResult = await loginUserPromise;
        const getRolesResult = await getRolesPromise
        return `Hello ${getRolesResult.name}, you have a ${getRolesResult.role} role`;
    }
    catch{

    }
}
getUserData().then(console.log);