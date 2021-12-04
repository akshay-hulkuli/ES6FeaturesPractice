// In ES6 we can declare variables in 2 ways.

let car1 = "mustang";
var car2 = "dodge-hellcart";

console.log(car1);
console.log(car2);



// hoisting


//this code prints undefined
console.log(a);
var a = 10;
console.log(a);


//code leads to error
// console.log(b);
let b = 20;
console.log(b)



//scope demonstration

var temp1 = 'hello ppl';

if(true){
    var temp1 = 'second time defined'; //prints second time defined
    console.log(temp1);
}

console.log(temp1); //prints second time defined


let temp2 = 'hello ppl';

if(true){
    let temp2 = 'second time defined'; // prints second time defined
    console.log(temp2);
}

console.log(temp2);  //prints hello ppl



// const key word is block scoped and used to define constants

const c = 100;

console.log(c);


// console.log(c1); gives error
const c1 = 244;
console.log(c1);