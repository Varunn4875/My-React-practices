//1. Right Angled trialgle

let R=5;

for(i=1; i<=R; i++){
	// console.log( ' '.repeat(R-i) + '*'.repeat(i) + ' '+ '*'.repeat(i) )
}   //for inverted switch the values to (i=R;i>=1;i--)


//2.Pyramid and Diamond  inverted using number

// let n=5;
// for (let i=1; i<=n; i++){
// 	console.log(' '.repeat(n-i) + String(i).repeat(2*i-1))
// }

// //inverted pyramid and diamond
// for(let i=n-1; i>=1;i--){
// 	console.log(' '.repeat(n-i) + String(i).repeat(2*i-1))
// }   


// 3. number pyramid
// let n=5;

// for(i=n; i>=1; i--){ //(i=n; i>=1; i--) for inverted
// 	let line='' //resets the line to empty string
// for(j=1; j<=i; j++){	
// 	line += j +' '
// }
// console.log(line)
//  }

 //4. Hollow Pyramid

 let n = 5;

for (let i = 1; i <= n; i++) {
  if (i === n) {
    console.log('*'.repeat(2 * i - 1));
  } else {
    console.log(' '.repeat(n - i) + '*'
     + ' '.repeat(2 * i - 3 > 0 ? 2 * i - 3 : 0)
     + (i > 1 ? '*' : ''));
  }
}



