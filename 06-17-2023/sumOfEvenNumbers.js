/*

Sum of Even Numbers
Write a function that takes an array of numbers and returns the sum of all the even numbers.

*/

function sumOfEvenNumbers(numbers) {
  // use filter to then only leave the even numbers
  let evens = numbers.filter((num) => num % 2 === 0);
  // we use reduce, acc = accrued value, current = current item in arr, starting val = 0
  return evens.reduce((acc, curr) => acc + curr, 0);
}
