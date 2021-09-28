//let variables
function a(){
let a = 10;
console.log(a);
let a = 100;
}

//const variable
//const is more strict then let
function b(){
const b;
let a;
b = 1000;
a = 10;
}

a();
b();