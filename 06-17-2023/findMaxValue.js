/* Write a function that takes an array of numbers and returns the maximum value. */

function findMaxValue(numbers) {
  // The `reduce()` method is used to iterate over the numbers array.
  // It takes a callback function as the first argument and an initial value (here, -Infinity) as the second argument.
  // The callback function compares the current element (curr) with the maximum value (max) obtained so far.
  // It returns the larger of the two values and that becomes the new maximum for the next iteration.
  return numbers.reduce((max, curr) => (curr > max ? curr : max), -Infinity);
}
