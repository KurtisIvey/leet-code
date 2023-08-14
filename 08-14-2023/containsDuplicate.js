// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/*
p: array of integers
r: return boolean true or false
ep:
    create empty object var
    iterate through with for loop,
        if not in obj, add into obj with val of 1
        if is in object, return true
    return false if no dupes found
*/

var containsDuplicate = function (nums) {
  let tracker = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in tracker) {
      return true;
    } else {
      tracker[nums[i]] = 1;
    }
  }
  return false;
};
