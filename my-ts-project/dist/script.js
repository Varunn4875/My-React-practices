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
//combining the above 
const adminUser = {
    role: "admin",
    name: "varun"
};
console.log(adminUser);
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
//Type narrowing is the process by 
//which TypeScript reduces a broader type 
// (like a union) into a more specific type
//  based on runtime checks.
// let status = "success" | "error" | "loading"
function printIDS(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    // else{
    //     console.log(id.toFixed(2))
    // }
}
printIDS(123);
//enum role
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["SUPER_ADMIN"] = "super_admin";
})(Role || (Role = {}));
let userRole = Role.ADMIN;
console.log(userRole);
//Generics
//declaring typescript  as value:any   is equal to javascript 
// function identify(value:any){
//     return value;
// }
// console.log(identify("varun"))
// <t>  <string>
function identity(value) {
    return value;
}
let result = identity("hello varun");
console.log(result);
const response = {
    success: true,
    data: "Data fetched successfully"
};
console.log(response);
//generic constraints
function getLength(item) {
    return item.length;
}
console.log(getLength("helo"), getLength([1, 23, 3]));
//multiple constraints
//mergin two different objects
function getsize(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const size = getsize({ name: "varun" }, { age: 24 });
console.log(size);
const updatedUser = (data) => {
    // only changed fields sent here 
    return data.id;
};
function printpublicuser(user) {
    console.log(user.id, user.name);
}
printpublicuser({ id: 1, name: "varun" });
export {};
//# sourceMappingURL=script.js.map