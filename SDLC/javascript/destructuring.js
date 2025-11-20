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
const arr=[1,23,445,566879,7654,34567,65,34565,4]
const string=JSON.stringify(arr)
console.log(string)
const parsed=JSON.parse(string)
console.log(parsed);
console.log(arr.splice(0,3))
console.log(arr)










