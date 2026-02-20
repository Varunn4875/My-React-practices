


//array syntax

let numbers: number[] = [1,2,3]
console.log(numbers)

let names: string[]=['apple','orange']
console.log(names)

//mixed

let name: (string|number)[]=["john",25]
console.log(name)

//objects

let user:{ readonly name:string; age?:number} ={
    name:"vijay",
    // age:25
}
console.log(user)

//functions 

//default parameters

function welcome(name:string ="Guest"):string{
    return `welcome ${name}`
}

console.log(welcome())

//interface   for objects

//types for unions functions and advanced types

interface users{
    name:string;
    age:number
}

let person1: users ={
    name:"varun",
    age:30
}
console.log(person1);

interface product{
    readonly id:number;
    name:string,
    description?:string;
}

let pro1 : product = {
    id:123,
    name:"iphone",
    
}
console.log(pro1)

type admin = {
    role:string;
}

type userDetails ={
    name:string;
}

type Adminuser = admin & userDetails

let id : string|number;

id ='123';
id:123;

function printId(id:string|number){
    console.log("ID:",id)
}
printId(123)

type PaymentStatus = "pending" | "completed" | "failed";

function updateStatus(status: PaymentStatus) {
  console.log(status);
}
updateStatus("pending")

//Type narrowing is the process by 
//which TypeScript reduces a broader type 
// (like a union) into a more specific type
//  based on runtime checks.

