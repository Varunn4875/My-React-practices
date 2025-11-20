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
    let count=0;
	return function inner(){
		return count++;
	// 	return function innering(){
	// 	console.log("im inner function")
	// }
	}
}

const multi=outer()
console.log(multi())  //while using return we need to save 
// those in variables and call them 
console.log(multi()) 

// outer()()()





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


//5. function with parameters

function add(a,b){
	return a+b;
}
const result=add(10,100)
console.log(result);

//7.IIFE -> Immediately Invoked Function Expression

//it defines a function and calls it immediately
// (function(){...}) and then it will be called immediately
//by ()

(function(){
	console.log("im first")
})();


//why IIFW is used

//Global scope pollution avoid pannalam.

// (function(){
// 	var message ="hello";
// 	console.log(message);
// })();
// console.log(typeof(message))  -->  undefined 


//Temporary variables will be created, used and erased
//One-time initialization will be helpful and efficient by this


//Arrow Function IIFE

// (()=>{
// 	console.log("Arrow IIFE")
// })();


//use-case Example - Counter inside IIFE

const counter=(function(){
	let count=0;
	return function(){
		count++;
		return count;
	}
})();
console.log(counter());
console.log(counter());

//8. Arrow Function short return
const square=(X) =>Math.pow(X,3);
console.log(square(5))

//9. callback function

// function sayHello(name) {
//   console.log("Hello " + name);
// };

// function greet(callback) {
//   callback("varun")
// }

// greet(sayHello);

//10.Anonymous function

setTimeout(function(){
	console.log('i will run after 1 sec')
},1000);


//11.constructor Function


function candidate(name,age){
	this.name=name;
	this.age=age;
}
const c1=new candidate("varun",23);
console.log(c1.name)
const c2=new candidate("sasi",23);
console.log(c2.name)

//Four types of User Defined functions

//1. Without Arguments, WIthout Return;

function showWelcome(){
	console.log("welcome to our website")
}
showWelcome()

//2. with Arguments , without Return

function showalert(message){
	alert(message);
}
// showalert("im varun")

//3. without arguments with return


function getCurrentDate(){
	let today=new Date();
	return today.toDateString()
}
let date=getCurrentDate();
console.log("today is ", date)

//4. with arguments, with return
function calculateDiscount(price,discountpercent){
	let discount=(price*discountpercent)/100;
	return price-discount;
}

let finalPrice=calculateDiscount(100,20)
console.log(finalPrice)



//-----------------------------------------------------------------------

//types of arguments
//1. fixed(positional)arguments
//2.default arguments
//3.rest arguments
//4.arbitrary arguments
//5.named arguments using objects
//6.callback as argument
//7.spread arguments


//1. fixed(positional)arguments
function fixed(name,age){
	console.log("hey" +" "+name,age)
}
fixed("varun",22)

//2.default arguments
function efault(name="varun"){
	console.log(name)
}
efault("sasi")

//3.rest arguments

function sum(...numbers){
	return numbers.reduce((a,b)=>a+b)
}
console.log(sum(10,23,454,65,6,76,7))

//4.arbitrary arguments

function showArgs(){
	for(let i=0; i<arguments.length; i++){
		console.log(arguments[i])
	}
}
showArgs("hello",100,true,false)

//arguments is an array -like object available inside regular functions(not in arrow functions)


//5.Named Arguments using object
//use object destr to mimic named arguments 

function createUser({name,age,city}){
	console.log(name,age,city)
}
createUser({"name":"varun","age":22,"city":"chennai"})


//6. callback as argument
function process(a,b,callback){
	return callback(a,b);
}
console.log(process(2,3,(x,y)=>x+y));

//7. spread argument
//spread is used to pass elements of an array as separate arguments
function add(a,b,c){
	return a+b+c;
}
let nums=[19,234,545]
console.log(add(...nums))

let a=[7896]
let N=130;

for(let i=0; i<=N; i++){
	a.push(i)
}
console.log(a)
let arr=[]
let lrg=0
// let sum=0
for(let i=0; i<a.length; i++){

	// if(lrg < a[i]){
	// 	lrg=a[i]
	// }
	lrg=lrg+a[i]
	


	 // sum=sum+a[i] // to add

	// if(a[i] % 2 === 0){
	// 	// sum=sum+a[i]
	// 	arr.push(a[i])

	// }
}
console.log(lrg)
console.log(a.reduce((a,b)=>a+b))





