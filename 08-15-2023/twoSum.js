/*
p: nums array, target integer
r: return array of indexes that add up to the target
ep: use hash map approach
    create empty object
    use for loop to iterate through
        calc difference by target - nums[i]
        if key dif is in obj, return [i, obj[diff]]
        mp[nums[i]] = i
        
*/

var twoSum = function (nums, target) {
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in mp) return [i, [nums[i]]];
    mp[nums[i]] = i;
  }
};
