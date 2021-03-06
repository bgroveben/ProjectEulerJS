// Even Fibonacci numbers
/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be :
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the fibonacci sequence whose values do not exceed four million,
find the sum of the even numbered terms.
*/

// First we get all of the numbers in a Fibonacci sequence:
var loop = function(n) {
  // sum (fibonacci(n)) = previous term (n-1) + term before previous (n-2)
  var first = 0;   // previous term
  var second = 1;  // term before previous
  var sum = 1;     // initialize at 1 (first number in fibonacci sequence)
  for (var i=2; i<=n; i++) {
    console.log(sum); // Display all fibonacci numbers as sanity check
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
}
console.log(loop(10));
console.log();


// Now for something more elegant
function recursion(n) {
   if (n <= 2){
     return 1;
   }else{
     return recursion(n-1) + recursion(n-2);
   }
}
console.log(recursion(10));
console.log();


// Now take the recursive fibonacci function and add a parameter that will handle the total of
// all of the even fibonacci numbers whose value is less than 4000000:
var limit = 4000000;
var total = 0;
var ary = [];  // Initialize an array to hold all of the values that will be summed
function fibonacci(ary, n) {
  if (n<=2) {
    return 1;
  } else {
    return ary[n-1] + ary[n-2];  // Populate the array
  }
}
for (var i=0; i<limit; i++) {
  ary[i] = fibonacci(ary,i);
  if((ary[i] < limit) && (ary[i]%2==0)){  // Disregard invalid numbers in the fibonacci sequence
    total += ary[i];
  }
}
console.log(total);
