let a, b, remaining;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...remaining] = [10, 20, 30, 40, 50];

console.log(remaining);


const foo = ['abc', 'def', 'ghi'];

const [firstword, secondword, thirdword]  = foo;

console.log(firstword);
console.log(secondword);
console.log(thirdword);


function f() {
    return [1, 2, 3];
}
  
const [A, , B] = f();
console.log(A); // 1
console.log(B); // 3

const [C] = f();
console.log(C); // 1


const user = {
    id: 24,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 24
console.log(isVerified); // true