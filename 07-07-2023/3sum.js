/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

goal: find 3 nums that together when added = 0

pseudocode: we first sort
    use for loop as we iterate through nums.
    left pointer at i+1, right pointer and nums.length-1
    while left pointer < right pointer
        calc sum of i + left + right
            if sum === 0, add the triplet with those digits to output arr. left++ right --
            if sum < 0 left pointer ++
            if sum > 0 right pointer --
            continue checking all

*/

function threeSum(nums) {
  let output = [];
  // sorted from least to greatest
  nums.sort((a, b) => a - b);

  // is minus 2 to ensure there are at least 2 elements remaining after curr elem that could form triplet
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // Avoid duplicate triplets by skipping the same value for the first element
      // continue causes next iteration of for loop
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[rights];

      if (sum === 0) {
        // if valid triplet that equals zero
        output.push([nums[i], nums[left], nums[right]]);
        // Avoid duplicate triplets by skipping the same values for the second and third elements
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        // move pointers
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return output;
}
