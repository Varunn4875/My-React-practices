//1. function declaration
//2. function expression
//3. functions with parameters
//4. function with inner function
//5. Arrow functions

//1. function declaration

function greet(){
	console.log("im greet function")
}
greet();

//2.function expression

const expfunc = function(){
	console.log("hi")
}
expfunc();

//3. Arrow Function(ES6)

const arrowfunc = () =>{
	console.log("im arrow function")
}
arrowfunc()

//4.function with inner function

function outer(){
    console.log("im outer function")
	return function inner(){
		console.log("im inner function")
		return function innering(){
		console.log("im inner function")
	}
	}
}

// const multi=outer()
// multi()   //while using return we need to save 
//those in variables and call them 


// outer()()()


let address={"street":"church-corner","city":"karur"}

const entries=Object.entries(address)
console.log(entries)


for(let [key ,value] of entries){
	console.log(`${key} : ${value}`)
}

entries.forEach( obj =>{
	console.log(`${obj[0]} : ${obj[1]}`)
})

for(i=0; i<entries.length;i++){
	console.log(entries)
}

//An array of the given object's own enumerable string-keyed property key-value pairs.
// Each key-value pair is an array with two elements: 
//the first element is the property key (which is always a string), 
//and the second element is the property value.



// function student(message){
// 	window.addEventListener("click", () =>{ alert(`hey ${message}`)})
// }

// student("varun")

// let arr=[1,2,3,4,5,1,2,3,4,5]
// let[a,b,...c]=arr
// console.log(c)

// function students(name,age){
	
// 	this.welcome=function(){
// 		console.log(`Hello my name is ${name} and my age is ${age}`)
// 	}
// }
// const student1=new students("varun",23)
// student1.welcome();

class student{
	constructor(name,age,gender){
			this.name=name,
			this.age=age,
			this.gender=gender
	}
	welcome=function(){
		console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
	}
}
const student1=new student("varun",23,"male")
const student2=new student("arun",23,"male")
console.log(student1,student2)
student2.welcome()

