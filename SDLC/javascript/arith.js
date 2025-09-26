let a=null ?? 5  //specifically it checks for null or undefined operators
console.log(a)  //and it gives right hand side as a result when 
//left hand side is null or undefined


//Nullish coalescing operator
let obj={'name':'varun'}
obj.age??=23;
console.log(obj);
//-----------------------------------------------------------

// let num1=2345495;
// let num2=3949357937;

// console.log(` num1+num2 = ${num1+num2}`)


// if conditional operator
let isMember=true;
let price=isMember ? 100 : 150;
console.log(price, typeof(price))
//--------------------------------------------------------

//template string in functions
const fun=(name)=>{
	return `my name is ${name}.`
}
console.log(fun("varun"))
//------------------------------------------------------------

//assignment operators

let no1=90
no1+=7
console.log(no1)

//logical operators
// let num1=2345495;
// let num2=3949357937;
// console.log(num1>=num2)
// console.log(false && 'varun') 
// console.log('VARUN' != true )
