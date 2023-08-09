/*
p: array of nums
r: array of nums with nums only appearing at max twice
ep:
    set current index var to 2 as we're reorganizing with that and the first 2 will be allowed by default
    we'll track curr -1 and curr-2 to see if the previous two indexes equal the curr, then incrememnt
    if not we set the curr to i and continue on for loop

    repeat and return the nums loop to the length of curr index
 */

// runtime 72ms beats 39.67%, mem 44.13mb beats 50.12%
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let currentIndex = 2;
  for (let i = 2; i < nums.length; i++) {
    if (
      nums[i] !== nums[currentIndex - 1] ||
      nums[i] !== nums[currentIndex - 2]
    ) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }
  nums.length = currentIndex;
  return nums.lengthß;
};
