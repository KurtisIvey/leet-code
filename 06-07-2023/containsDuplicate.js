/* Given an integer array nums, return true if ANY value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109 */

/*
    approach: going to just write a for loop and add each number into the object with the frequency it is in there.

    we just need to find a duplicate number once, so it'll hit in a conditional if check if the obj[num] returns true
*/

// time and space complexity O(N)
function containsDuplicate(nums) {
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (numsObj[num]) {
      return true;
    } else {
      numsObj[num] = 1;
    }
  }
  return false;
}


