const obj={name:"varun",age:23,job:"developer"}

console.log(obj.name,obj.age) //extracting datas and information
//using dot notation

obj.name="varunselvakumar"
// console.log(obj)

//when there is a space betweenkeys
//like "first name"

//.notation can't help

// const person={"first name":"varunselvakumar",age:22,area:"tmalai"}

// person["first name"]="selvi"
// console.log(person)


//ways to create objects

//object literals
//using constructor
//using object.create()
//


//1. object literals

// const obj={name:"varun",age:23,job:"developer"}
// console.log(obj)

//--------------------------

//2.using constructor

// const person=new Object();

// person.name="varun"
// person.age=23;
// person.location=12.2344545;

// console.log(person)

//-------------------------------

//3.using object.create()

const person={
	sayHello:function(){
		return (` Hello ${this.firstname} ${this.secondname}`)
	}
}

const person1=Object.create(person)
person.firstname="Varun"
person.secondname="Selvakumar"
person.age=22

console.log(person)
console.log(person.sayHello())

//----------------------------------

//4.this -keyword

const greet={
	prop:42,
	greetings:function(){
		return(`Hey prop ${this.prop}`)
	}
}
console.log(greet.greetings())

//--------------------------------------

//5. using class

// class student{
// 	constructor(name,age,gender){
// 			this.name=name,
// 			this.age=age,
// 			this.gender=gender
// 	}
// }
// const student1=new student("varun",23,"male")
// const student2=new student("arun",23,"male")
// console.log(student1,student2)


//using function
function student(name,age){
	this.name=name;
	this.age=age;
	this.welcome=function(){
		console.log(`Hello my name is ${this.name} and ${this.age}`)
	}
}
const student1=new student("varun",23)
student1.welcome()


//Iterating javascript objects

// 1. using for-in-loop

for(let i in person){
	console.log(`${i}:${person[i]}`)
}

//2. Object.keys()
const keys=Object.keys(person)
console.log(keys)
let index=0;
keys.forEach(key =>{
	console.log(`${index} - ${key}:${person[key]}`)
	index++
})

//3.Object.values()

const values=Object.values(person)
values.forEach(value =>{
	console.log(`${value} : ${person[value]}`)
})   ///in object.values() - we cant extract keys 

//it gives only the values not the keys

//4. object.entries()

const user1={name:"varun",age:23,religion:"christian"}
const entry=Object.entries(user1)
entry.forEach(entri =>{
	console.log(`${entri[0]} - ${entri[1]}`);
})








