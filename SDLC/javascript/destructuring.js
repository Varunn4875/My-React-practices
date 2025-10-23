// let arr=[[1,2],3,4,[4,5,6]]
// console.log(arr)
// let [[a,b],c,d,[e,f,g]]=arr
// console.log(a,g)

//rest
// let arr=[1,2,3,4,5,1,2,3,4,5]
// let[a,b,...c]=arr
// console.log(c)

// let address={"street":"church-corner","city":"karur"}
// let obj={"name":"varun","age":24,address}
// let {name,age ,address: {street,city} }=obj
// console.log(name);
// console.log(street);



//JSON.parse()
// const arr=[1,23,445,566879,7654,34567,65,34565,4]
// console.log(arr)
// const strarray=JSON.stringify(arr)
// console.log(strarray)
// const parsedarray=JSON.parse(strarray)
// console.log(parsedarray)



// splice(start, length, new elemetns)
// let arr=["a","banana","apple","logistics","paraben"]
// arr.splice(1,1,"varun","varunselvakumar")
// console.log(arr);
// arr.slice(1,1);
// console.log(arr)
let a=[]
let N=130;

for(let i=0; i<=N; i++){
	a.push(i)
}
console.log(a)

let arr=[]
// console.log(arr.reduce((a,b)=>a+b))
// let sum=a[0]
let sum=0
for(let i=0; i<a.length; i++){
	
	// if(sum < a[i]){
	// 	sum=a[i]
	// }

	 // sum=sum+a[i] // to add

	if(a[i] % 2 === 0){
		// sum=sum+a[i]
		arr.push(a[i])

	}
}
// console.log(arr)
// console.log(arr.length)
// console.log(sum);
let arr1=[];
for(let i=arr.length; i>0; i--){
	arr1.push(i)
}
console.log(arr1)

const fruits = ['apple', 'banana', 'kiwi'];
let empty=[];
for(let i=0; i<fruits.length; i++){

	empty.push(fruits[i].length)

}
console.log(empty)


//Filter Objects by Property
//From an array of objects, return only those older than 18.

const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Carol', age: 19 }
];

// let result=[]
// for(let obj of people){
	
// 	if(obj.age > 18){
//       result.push(obj)
       
// 	}
// }
// console.log(result)

const adults=people.filter(person => person.age > 18)
console.log(JSON.stringify(adults))


let array=["a","b","c"]
console.log(array.filter(x => x%2===0))

//24. reduce()
console.log(array.reduce((a, b) => a + b)); //it gives sum

//25.reduceRight()
console.log(array.reduce((a,b)=>a+b))

//26.every()
console.log(array.every(x => x>5))
// console.log(nums.some(x => x>5))
const nums=[1,2,4,6,7,8,9,9,12,45,]
nums.fill(0,0,3)  //content,startindex, endlength
console.log(nums)




