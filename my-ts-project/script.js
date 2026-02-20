//array syntax
var numbers = [1, 2, 3];
console.log(numbers);
var names = ['apple', 'orange'];
console.log(names);
//mixed
var name = ["john", 25];
console.log(name);
//objects
var user = {
    name: "vijay",
    // age:25
};
console.log(user);
//functions 
//default parameters
function welcome(name) {
    if (name === void 0) { name = "Guest"; }
    return "welcome ".concat(name);
}
console.log(welcome());
var person1 = {
    name: "varun",
    age: 30
};
console.log(person1);
var pro1 = {
    id: 123,
    name: "iphone",
};
console.log(pro1);
