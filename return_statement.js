function returnValues() {
    var name = "abc";
    var phone = "9876543271";
    var address = "abc dfc grfh";

    // returning multiple variables
    return {name, phone, address}
}


const {...a} = returnValues();

console.log(a.name);
console.log(a.phone);
console.log(a.address);