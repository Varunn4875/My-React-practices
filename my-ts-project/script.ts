


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

//interface

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

