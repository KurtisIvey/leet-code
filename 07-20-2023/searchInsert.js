/* Given a sorted array of distinct integers and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. 

p: array of integers, target which is an integer value
r: expected to return index if present in array. if not in array, return where it would fit if it was inserted
    o log n time complexity

ep:
    for loop to traverse
        if num[i] === target, return i
        if i+1 === num.length && num[i] < target return num.length 
        else if num i < target && target < num i + 1
            return i+1
*/

// runtime 61ms beats 44%, 41.89 mb memory beats 80%
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  } else if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === target) {
      return i;
    } else if (num < target && target < nums[i + 1]) {
      return i + 1;
    }
  }
};
