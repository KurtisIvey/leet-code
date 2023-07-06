/*

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.


pseudocode:
    create new output empty arr;
    for loop to iterate and apply transform to each arr item
    push transformed arr item to output arr
    return output arr
*/

function map(arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(fn(arr[i], i));
  }
  return output;
}
