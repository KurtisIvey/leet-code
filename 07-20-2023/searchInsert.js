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

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    // Calculate the middle index of the current range using integer division
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return low;
};

var searchInsert = function (nums, target) {
  // Initialize two pointers `low` and `high` to keep track of the search range
  let low = 0; // Starting index of the search range (beginning of the array)
  let high = nums.length - 1; // Ending index of the search range (end of the array)

  // Start the binary search loop
  while (low <= high) {
    // Calculate the middle index of the current range using integer division
    let mid = Math.floor((low + high) / 2);

    // Check if the value at the middle index is greater than the target
    if (nums[mid] > target) {
      // If yes, adjust the `high` pointer to search in the left half of the current range
      high = mid - 1; // Set `high` to the index before the current middle element
    }
    // Check if the value at the middle index is less than the target
    else if (nums[mid] < target) {
      // If yes, adjust the `low` pointer to search in the right half of the current range
      low = mid + 1; // Set `low` to the index after the current middle element
    }
    // If the value at the middle index is equal to the target, it means we found the target
    else {
      // Return the middle index where the target is found in the array
      return mid;
    }
  }

  // If the loop finishes and the target is not found in the array,
  // return the `low` index, which is the position where the target should be inserted
  return low;
};
