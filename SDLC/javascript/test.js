// console.log(a);
// const a=10;

//  const x = 1;

// console.log(x)
// {
//   const x = 2; // different block → allowed
//   console.log(x)
// }
// console.log('fkjdkfh'.concat('dfdidh'))
//let x = null ?? 5 || 10;  SyntaxError
let x = (null ?? 5) || 10; // Correct
console.log(x)
console.log("a" < "b"); // false

//Object.is() is a most powerful strict equality even for NaN and -0
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false

console.log(5 | 3); // 5 = 0101, 3 = 0011 → 0101 | 0011 = 0111 → 7


