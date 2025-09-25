// variable redeclaration

// const a="tamil";
// console.log(a)
const a="varun";
console.log(a);   //  const and let cannot be redeclared

//var can be redeclared
var b='sdlc'
var b='karur'
console.log(b)
//-------------------------------------------------------------------------

//value assignment

var c=45;
c=25;
console.log(c)   //can be reassigned

//let and const cannot be reassigned

let num=10;
let int=10.5;
let str='varun';
let bool=true;
let typ=null; console.log( typ,typeof(typ))
f=100
console.log( f ,typeof f)
console.log(str,"type:" + typeof(str))
console.log(int,"type:" + typeof(int))


    // let now = new Date();
    // let hours = now.getHours();
    // let minutes = now.getMinutes();
    // let seconds = now.getSeconds();

    // console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
//-----------------------------------------------------------------------------------------------------

//TYPE CONVERSION

d=new Date();
console.log(d, "type:" + typeof(d))
d=Number(d)
console.log(d, "type:" + typeof(d))


t=false;
console.log(t, "type:" + typeof(t))
t=Number(t)
console.log(t, "type:" + typeof(t))



//converting arrays
let ar=[23,45,54,45];
console.log(ar, "type:" + typeof(ar))
// ar=ar.toString(ar);
ar=Number(ar)
console.log(ar, "type:" + typeof(ar))

//conversion to parseInt()

let array=23.567;
console.log(array,"type:" + typeof(array))
array=parseFloat(array)
console.log(array,"type:" + typeof(array))
array=parseInt(array)
console.log(array,"type:" + typeof(array))


//string to number

string="Hello world"
console.log(string,"type:" + typeof(string))
string=Number(string)
console.log(string,"type:" + typeof(string))



//TYPE CORRECTION

let number1=100;
let number2="200";
number2=Number(number2)
console.log(number1+number2);


