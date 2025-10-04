//6.nested-for-loop

// for(let i=1; i<=5; i++){
// 	console.log(`${i} th table`)
//    for(let j=1; j<=10; j++){
//    	console.log(`${i} * ${j} = ${i*j}`)
//    }
//    console.log("-----------")
// }


// 1. while loop
let seconds=2

while(seconds > 0){
	// console.log("redirecting in seconds" + seconds)
	seconds--;
}

// 2. do while loop
let number=1
do {
	// console.log('the number is ' + number)
	number ++
}
while(number <=5)


//3. do while with if 
let attempts=0;
let correct=false;
let RealPassword=1234
do{
	 let enteredPasswd= parseInt(prompt(`Enter your password Attempt No: ${attempts + 1} `))
	attempts ++;

	if(enteredPasswd === RealPassword){
		console.log(`Access granted`)
		break;
	}else{
		console.log(`Access Denied   ${enteredPasswd}`)
	}
	if(attempts === 3){
		console.log("Too many attempts. Exiting...")
		break;
	}
}while(!correct)

// do{
// 	console.log("Enter password");
// 	attempts++;

// 	if(attempts===3){
// 		console.log("Too many attempts. Exiting...");
// 		break;
// 	}
// }while(!correct);



// 4. for-of-loop
// let fruits=["apple","banana","orange"]

// for(let i=0; i<fruits.length; i++){
// 	console.log(`${i}-${fruits[i]}`)
// }
// for(let fruit of fruits){
// 	console.log(fruit)
// }

//5. for-in-loop

// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020
// };

// for (let key in car) {
//   console.log(`${key}: ${car[key]}`);
// }