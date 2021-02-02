//false : 0, -0, '', null, undefined
//true : 1, -1, 'hello', []
let num;    //undefined
if('false'){
    console.log('true');
}else{
    console.log('false!');
}

num && console.log(num);
num = 9;
num && console.log(num);

let obj;
obj && console.log(obj.name);
obj = {name : 'moong2',};
obj && console.log(obj.name);