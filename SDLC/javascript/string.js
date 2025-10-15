
//1.toUpperCase()
let text="varunselvakumar"
console.log(text.toUpperCase())

//2.toLowerCase
let lc="varunselvakumar"
console.log(lc.toLowerCase())

//length
console.log(lc.length)

//charAt()
console.log(lc.charAt(5))

//includes()
let inc = "I love Javascript"
console.log(inc.includes("java") ? 'Yes' : 'Nah');

//replace()
let replace= "hello world"
console.log(replace.replace("world","varun"))

//slice()
let slice="varunselvakumar"
console.log(slice.slice(0,5))

//subString()
console.log(text.substring(0,5))

//trim()
let trim="   varun   "
console.log(trim.trim())

//concat()
let a ="varun";
let b="selvakumar"
console.log(a.concat(' ').concat(b))

//split()
let split= "A,B,C,D";
let result=split.split(',')
console.log(result.join(' - '))


let char="varun"
console.log(char.charCodeAt(0)+ " "+char.charCodeAt(1)+ " "+char.charCodeAt(2)+ " "+char.charCodeAt(3)+ " "+char.charCodeAt(4))

let pds="5"
console.log(pds.padEnd(4,'0'))


//---------Search methods in string-//

//indexof()

let textIndex="The rain in SPAIN stays mainly in the plain"
console.log(textIndex.indexOf(" "))
console.log(textIndex.lastIndexOf(" o"))
console.log(textIndex.search("Hello"))
console.log(Array.from(textIndex.matchAll("ain")))

//startswith
//endswith

let text1 = "JavaScript";
console.log(text1.endsWith("vaScripts") ? "Yes" : "No");
//endsWith
