const array = [1,2,3,4,5,6,7,8,9];

console.log(array.map(key => key*10));

const evenArray = array.filter((key)=>{
    if(key % 2 == 0) return true;
    else return false;
})

console.log(evenArray);


const oddArray = array.filter((key)=>{
    if(key % 2 !== 0) return true;
    else return false;
})

console.log(oddArray);



const func = (a,b) => {
    var sum = a+b
    return sum;
}

console.log(func(10,10))