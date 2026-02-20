//array syntax
let numbers = [1, 2, 3];
console.log(numbers);
let names = ['apple', 'orange'];
console.log(names);
//mixed
let name = ["john", 25];
console.log(name);
//objects
let user = {
    name: "vijay",
    // age:25
};
console.log(user);
//functions 
//default parameters
function welcome(name = "Guest") {
    return `welcome ${name}`;
}
console.log(welcome());
let person1 = {
    name: "varun",
    age: 30
};
console.log(person1);
let pro1 = {
    id: 123,
    name: "iphone",
};
console.log(pro1);
let id;
id = '123';
id: 123;
function printId(id) {
    console.log("ID:", id);
}
printId(123);
function updateStatus(status) {
    console.log(status);
}
updateStatus("pending");
export {};
//Type narrowing is the process by 
//which TypeScript reduces a broader type 
// (like a union) into a more specific type
//  based on runtime checks.
//# sourceMappingURL=script.js.map