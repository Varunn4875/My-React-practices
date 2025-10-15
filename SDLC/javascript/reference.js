//objects and arrays are reference data types

// //taking values by heap memory
// let obj1={name:"raj",age:24,city:"chennai"}
// let obj2=obj1
// console.log(obj2)
// obj1.name="varun"
// console.log(obj1)
// let index=0;
// for(let key in obj1){
// 	console.log(`${index}: ${key} =>${obj1[key]}`)
//      index++
// }

//cloning methods

// 1.objectassign()
// 2.spread operator
// 3.slice()
// 4.concat()
// 5.Array.from()
// 6.JSON.stringify()
// 7.JSON.parse(JSON.stringify())

let arr1=[11,22,33,33]
let arr2=[23,45,5667,78]

let arr3=Object.assign([],arr1.concat(arr2))

console.log(arr3)

let obj1={a:1,b:2}
let obj2={c:3,d:4}
let obj3=Object.assign({},obj1,obj2)
console.log(obj3)


//using spread operator

let arr4=[...arr1,...arr2]
console.log(arr4)
let obj4={...obj1,...obj2}
console.log(obj4)

//using slice

let arr4dup=arr4.slice()
console.log(arr4dup)

let arr5dup=Array.from(arr4dup)
console.log(arr5dup)

let originalArray=[1,2,3]
let clonedArray=JSON.stringify(originalArray)
console.log(clonedArray)
clonedArray=JSON.parse(JSON.stringify(originalArray))
console.log(clonedArray)