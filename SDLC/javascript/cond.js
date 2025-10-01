// 1. using just if-statement

// let age=prompt('what is your age?')
// if(age>=18){
// 	console.log("you are aligible for discount")
// }


//2. Login validation using only if-else

// let userName=prompt('Enter userName')
// let pin=prompt('Enter your pin')

// if((userName ==='varun') && (pin==='21022002')){
// 	console.log('permission granted')
// }else{
// 	console.log('permission not granted')
// }



//3.movie ticket price calculator using else-if ladder

// let years=prompt('Enter your children age in years')
// let d1=10
// let d2=15
// let d3=20
// if(years<=3){
// 	console.log(`your children is elibible for ${d1}% discount`)
// }else if(years<=9){
// 	console.log(`your children is elibible for ${d2}% discount`)
// }else if (years<=12){
// 	console.log(`your children is elibible for ${d3}% discount`)
// }else {
// 	console.log(`your too old for discount`)
// }



//4. using withdrawl using nested if
//                         ---------

// let pins=prompt('Enter your pins')
// let balance=2000
// let withdrawlAmt=prompt('Enter your withdrawlAMount')
// let err='404'

// if (pins==='2102') {
// 	if(withdrawlAmt<=balance){
// 		console.log(`withdrawl amount of ${1500} is successfull`)
// 	}
// 	else if(withdrawlAmt>balance){
// 		console.log(`insufficient balance error:${err}`)
// 	}
// } else{
// 	console.log(`your pin was incorrect`)
// }


//5.language selection using switch statement

let userLanguage=prompt('Enter your preferred Language').toLowerCase()
switch(userLanguage){
		case "tamil":
			console.log(`you're switched to tamil`)
		break;
		case "english":
			console.log(`Your Profile was switched to ${userLanguage}`) 
		break;
		case "hindi":
		console.log(`Your Profile was switched to ${userLanguage}`)
		break;
		default:
			console.log("please select your language")
}
