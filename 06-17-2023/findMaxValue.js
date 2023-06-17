/* Write a function that takes an array of numbers and returns the maximum value. */

function findMaxValue(numbers) {
  // The `reduce()` method is used to iterate over the numbers array.
  // It takes a callback function as the first argument and an initial value (here, -Infinity) as the second argument.
  // The callback function compares the current element (curr) with the maximum value (max) obtained so far.
  // It returns the larger of the two values and that becomes the new maximum for the next iteration.

  return numbers.reduce((max, curr) => (curr > max ? curr : max), -Infinity);
}

/*

In this code, the reduce() method is used to find the maximum value in the numbers array. Here's how it works:

The initial value for max is set to -Infinity. This ensures that any element in the array will be considered greater than -Infinity during the first iteration.

The reduce() method iterates over each element (curr) in the numbers array.

For each iteration, the callback function (max, curr) => (curr > max ? curr : max) is executed. It compares the current element (curr) with the maximum value (max) obtained so far.

If the current element (curr) is greater than the maximum value (max), the ternary operator (curr > max ? curr : max) returns curr as the new maximum value. Otherwise, it returns max as is.

The returned value from the callback function becomes the new max value for the next iteration.

After all iterations, the final maximum value is returned by the reduce() method.

In the example usage, the findMaxValue function is called with the numbers array [12, 6, 21, 8, 15]. The function finds the maximum value, which is 21, and it is then printed to the console.


*/
