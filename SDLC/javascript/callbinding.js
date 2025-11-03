// const person={
// 	sayHello:function(city,country){
// 	return this.firstname+" "+ this.lastname+" "+city+" "+country
// }
// }

// const person1={firstname:"varun",lastname:"selvakumar"}

// //call
// console.log("call-method - ",person.sayHello.call(person1,"Karur","India"))

// //Apply
// console.log("apply-method - ",person.sayHello.apply(person1,["karur","India"]))

// //Bind
// const justfunction = person.sayHello.bind(person1,"queenx","UK")
// console.log(justfunction())

//Error handling functions
let age=-5;
try{
	if(age<0){
		throw new Error("age cannot be Negative")
	}
}catch(err){
	console.log(err.message)
}finally{
	console.log("thank you")
}

//types of errors