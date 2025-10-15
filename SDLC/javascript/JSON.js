
//JSON - Javascript Object Notation


// console.log(obj)
// const jsonobj=JSON.stringify(obj)
// console.log(jsonobj)
// const parsed=JSON.parse(jsonobj)
// console.log(parsed)

// const arr=[1,23,44,55,66,76,8]

// const jsonarray=JSON.stringify(arr)
// console.log(jsonarray)
// const parsedarray=JSON.parse(jsonarray)
// console.log(parsedarray)

try{
	const wrongJson=[1,23,44,55,66,76,8]
	const data=JSON.stringify(wrongJson)
	console.log(data)
}catch(err){
	console.log("JSON Error" + err.message)
}