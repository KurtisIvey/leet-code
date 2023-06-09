/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/*
going to create an obj
create an two vals that we'll then fill as we iterate through with length k. will store a obj with num: # and freq: # . will replace as we iterate below
iterate through nums adding them to object along with incrememnting when repeat appears
afterwards, we'll then have an array with k length. We'll supply that by itera

*/

function topKFrequent(nums, k) {
  const obj = {};
  let resultK = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }
  //console.log(obj);
  // create sorted array of nums by chaining Object.entries with .sort method attached
  // will need to trim array later to k length, sorts least to greatest. Is array of objects
  let arrayOfNumbers = Object.entries(obj).sort((a, b) => a[1] - b[1]);
  console.log(arrayOfNumbers);
  for (let i = 0; i < k; i++) {
    let poppedNum = arrayOfNumbers.pop();
    // must convert to into via parse int
    resultK.push(parseInt(poppedNum[0]));
  }
  return resultK;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
