/*
Given an array of integers nums and an integer target, return indices 
of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and 
you may not use the same element twice.

You can return the answer in any order.

p:array of nums, target num in int
r: return indices of two nums in array format
ep:
    double for loop, iterate through each num

*/

// runtime 102ms beats 49.82%, memory 42.04mb beats 84.68%
var twoSum = function (nums, target) {
  let output;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output = [i, j];
      }
    }
  }
  return output;
};

// faster: one loop iteration

var twoSum = function (nums, target) {
  // Create an empty object to act as a Map.
  const mp = {};
  // Loop through each element in the nums array.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference between the target and the current element.
    const diff = target - nums[i];

    // Check if the difference exists as a key in the Map (mp).
    // If it does, it means we have found two numbers whose sum equals the target.
    if (diff in mp) {
      // Return an array containing the current index (i) and the index of the number with the value diff.
      return [i, mp[diff]];
    }
    // If the difference is not found in the Map, store the current element (nums[i]) as a key in the Map, and its corresponding value is the index (i).
    mp[nums[i]] = i;
  }
  // If no such pair of numbers is found, the function implicitly returns undefined.
};
