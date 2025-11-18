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
// let random=JSON.stringify(Date.now())
// console.log(random.charAt(12))

// let str = prompt("Enter a string:");
// let rev = str.split('').reverse().join('')
// if (str === rev)
//   console.log("Palindrome");
// else
//   console.log("Not Palindrome");

// let n = parseInt(prompt("Enter the number of terms:"));
// let n1 = 0, n2 = 1, nextTerm;

// if (isNaN(n) || n <= 0) {
//   alert("Please enter a valid positive number!");
// } else {
//   let series = "";

//   for (let i = 1; i <= n; i++) {
//     series += n1 + " ";
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
//   console.log("Fibonacci Series:", series);
// }

// let n = parseInt(prompt("Enter number of terms:"));
// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for (let i = 2; i < n; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

//loops
let seconds=5

// do{
//   console.log(`${seconds}`)
//   seconds++;
// }while(seconds <5)

// while(seconds <5){
//   console.log(`${seconds}`)
//   seconds++
// }

//for-loop

// for(let i=0; i<=seconds;i++){
//   console.log(i)
// }

//nested-for loop

// for(let i=1; i<=5;i++){

//   for(let j=1;j<=5;j++ ){
//     console.log(i,j)
//   }
// }

// let forarr=['apple','orange','banana']

// for (let items of forarr){
//   console.log(items)
// }

// for(let i=0; i<forarr.length;i++){
//   console.log(forarr[i])
// }

let obj={"name":"varun","age":21,"city":"tmalai"}

// for(let values in obj){
//   console.log(`${values} : ${obj[values]}`)
// }

// for(let [key,value] of Object.entries(obj)){
//   console.log(`${key} : ${value}`)
// }