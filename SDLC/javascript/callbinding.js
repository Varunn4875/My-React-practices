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
// let age=-5;
// try{
// 	if(age<0){
// 		throw new Error("age cannot be Negative")
// 	}
// }catch(err){
// 	console.log(err.message)
// }finally{
// 	console.log("thank you")
// }

// //types of errors
// //type error
// try{
// 	let num=5;
// 	num.toUpperCase()
// }catch(err){
// 	console.log(err.name)
// 	console.log(err.message)
// }

// //Range Error
// try{
// 	let num=12.456
// 	console.log(num.toPrecision(500))
// }catch(err){
// 	console.log(err.name)
// 	console.log(err.message)
// }
// finally{
// 	console.log("running completed")
// }

// //Eval - Str
// //In JavaScript, eval() is a built-in function 
// // that takes a string as an argument 
// // and executes it as JavaScript code.

// let num = '5+5'
// console.log(num)
// const nums=eval('5+5')
// console.log(nums)

// //syntax Error
// try{
// 	eval('console.log("hi"')
// }catch(err){
// 	console.log(err.name)
// 	console.log(err.message)
// }

// try{
// 	let num1=parseFloat(prompt("enter your number"))
// 	let operator=(prompt("enter the operator:(+,-,/"))
// 	let num2=parseFloat((prompt("enter your number")))

// 	if(isNaN(num1) || isNaN(num2)){
// 		throw new Error("just type numbers only...")
// 	}
// 	let result;
// 	switch(operator){
// 		case"+":
// 		result=num1 +num2
// 		break;
// 		case"-":
// 		result = num1 - num2 
// 		break;
// 		case"*":
// 		result=num1 * num2
// 		break;
// 		case"/":
// 		if(num1==0){
// 			throw new Error("zero Division Errpr")
// 		}
// 		result = num1 / num2
// 		break;
// 		default:
// 			throw new Error("unsupported operator")
// 	}
// 	alert(result)
// }catch(err){
// 	alert(err)
// }finally{
// 	alert("Your calculator operation compleeed")
// }
let random=JSON.stringify(Date.now())
console.log(random.charAt(12))

