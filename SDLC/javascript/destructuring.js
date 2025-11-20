// let arr=[[1,2],3,4,[4,5,6]]
// let [[a,b],c,d,[e,f,g]]=arr 
// console.log(c)


// let address={"street":"church-corner","city":"karur"}
// let obj={"name":"varun","age":24,address}


// let {name,age ,address: {street,city} }=obj
// console.log(name)
// console.log(street)



//JSON.parse()
const arr=[1,23,445,566879,7654,34567,65,34565,4]
const string=JSON.stringify(arr)
console.log(string)
const parsed=JSON.parse(string)
console.log(parsed);
console.log(arr.splice(0,3))
console.log(arr)

let n=15

for(let i=1; i<=n;i++){

	let result=''

	if(i===1){
		console.log('*'.repeat(n))
	}else if(i===n){
		console.log('*'.repeat(n))
	} else{
		result+='*'+' '.repeat(n-2)+'*'
		console.log(result)
	}

	
}

let n=5
let m=10

for(let i=1; i<=n; i++){

	let result=""

	for(let j=1; j<=m; j++){
		if(i===1 || i===n || j===1 || j===m){
			result+="*"
			} else{
				result+=" "
			}
		}
	console.log(result)
}













