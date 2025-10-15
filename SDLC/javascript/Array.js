//1.length
// let arr = [1,2,3,4,5]
// console.log(arr.length)

//2.toString()
// let arr1=["a","b","c","d"]
// console.log(arr1.toString()) 

//3. join()
// let arr3 = ["apple","banana","orange"]
// console.log(arr3.join("|"))


// //4.pop()
// let arr=[1,2,3,4,5,6]
// arr.pop()
// console.log(arr);

//5.push()
// let arr=[1,2,3,4,5,6]
// arr.push("apple")
// console.log(arr)

//6. shift()  unshift()
// let arr=[1,2,3,4,5,6]
// arr.unshift("apple")
// console.log(arr)

//8. concat()
// let a=[1,2,34]
// let b=[34,456,767]
// console.log(a.concat(b).reverse())


//9.flat()
// let arr=[1, [2,[3,4]],1, [2,[3,4]],1, [2,[3,4]],1, [2,[3,4]]]
// console.log(arr.flat(arr.length))
//----------------------------------------------------------------------------------
//10.slice()

//won't modify the original array
// returns the new array
//start as default as 0

//gives a new array

// let arr=["a","banana","apple","logistics","paraben"]
// console.log(arr.slice(0,3));
//------------------------------------------------------------------------------

//11.splice()

//add, remove and replace elements

//it modifies the original array
//returns the removed elements

//splice(start, length, new elemetns)
// let arr=["a","banana","apple","logistics","paraben"]
// arr.splice(1,1,"varun","varunselvakumar")
// console.log(arr.join(" / "))
//------------------------------------------------------------------------------


// 12. indexOf()  13.lastIndexOf
// let arr=["a","banana","apple","logistics","paraben","apple","logi","a"]
// console.log(arr.lastIndexOf("a"))

// //13. includes()
// console.log(arr.includes("logistics"))

//14.find()
let nums = [5, 10, 15,12,34,56,7,35,46567,57,6];
console.log(nums.find(x => x > 10))

//15.findIndex()
console.log(nums.findIndex(x => x > 10))  //gives the index

//16.findLast()
console.log(nums.findLast(x => x > 100)) //gives the element

//17.findLastIndex()
console.log(nums.findLastIndex(x => x >100))

//18.sort()
nums.sort((a,b)=> b-a)
console.log(nums)  //a-b for ascending

// //19.reverse()
// nums.reverse()
// console.log(nums)



// //20.forEach()   for arrays and objects

// nums.forEach((value,index)=>{
// 	console.log(index +":"+value)
// })

const users=[{name:"raj",age:24,city:"chennai"},
			 {name:"shiva",age:26,city:"canada"},
			 {name:"dhana",age:23,city:"kerala"}];
users.forEach((value,index)=>{
	console.log(index +" "+value.name)
})


//22. map()
nums.map((value)=>{
	// console.log( Math.sqrt(value).toFixed(0) )
})

 function show(x)
{
	return parseInt(Math.sqrt(x).toFixed(0));
}

let sqrt=nums.map(show);
console.log(sqrt);

let elig=users.map((user)=>({
	name:user.name,
	age:user.age,
	status: user.age>18?"Eligible":"not eligible"
}))
console.table(elig)



//23.filter()
let arr=["a","b","c"]
console.log(arr.filter(x => x%2===0))

//24. reduce()
console.log(arr.reduce((a, b) => a + b)); //it gives sum

//25.reduceRight()
console.log(arr.reduce((a,b)=>a+b))

//26.every()
console.log(arr.every(x => x>5))
console.log(nums.some(x => x>5))

//27.Array.from()

let keys=Array.from(arr.keys())
console.log(keys)

//28.Array.enteries()
let result=""
for (let [index,value] of arr.entries()){
	result += index + " = "+value 

}

nums.fill(0,1,4)  //content,startind, endind
console.log(nums)

let a=[1,2]
let b=[3,4]
let c=[...a, ...b]
console.log(c)
