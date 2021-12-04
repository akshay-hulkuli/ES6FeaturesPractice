function add(a, b = 1) {
    return a + b;
}
  
console.log(add(5, 2));

console.log(add(5));


function test(num = 1) {
    console.log(typeof num)
}
  
test()   //number    
test(undefined)  //number

test('')    //string
test(null)  //object
test({}) //object