let age=18

if(age>=18){
	console.log("you are aligible for discount")
}


//2. Login validation using only if-else

let userName='varun'
let pin='210220022'

if((userName ==='varun') && (pin==='21022002')){
	console.log('permission granted')
}else{
	console.log('permission not granted')
}



//3.movie ticket price calculator using else-if ladder

let years=33
let d1=10
let d2=15
let d3=20
if(years<=3){
	console.log(`your children is elibible for ${d1}% discount`)
}else if(years<=9){
	console.log(`your children is elibible for ${d2}% discount`)
}else if (years<=12){
	console.log(`your children is elibible for ${d3}% discount`)
}else {
	console.log(`your too old for discount`)
}

//4. using withdrawl using nested if
//                         ---------

let pins='2102'
let balance=2000
let withdrawlAmt=15003
let err='404'

if (pins==='2102') {
	if(withdrawlAmt<balance){
		console.log(`withdrawl amount of ${1500} is successfull`)
	}
	else if(withdrawlAmt>balance){
		console.log(`insufficient balance error:${err}`)
	}
}else{
	console.log(`your pin was incorrect`)
}



//5.language selection using switch statement

let userLanguage='tEnglish'
switch(userLanguage){
case "Tamil":
	console.log(`you're switched to tamil`)
break;
case "English":
	console.log(`Your Profile was switched to ${userLanguage}`) 
break;
case "Hindi":
console.log(`Your Profile was switched to ${userLanguage}`)
break;
default:
	console.log("please select your language")
}
