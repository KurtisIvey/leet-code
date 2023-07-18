/*
p:  taking in nums array
r: return the number of unique elems in a new array with no dupes
ep: 
    create currentIndex var to track index so where know where to replace
    we iterate over loop with for loop starting i at -1
        if i+1 !== i {
            set nums[currentindex] to nums i+1
            increment current index
        }
        after iterating through for loop, we then set nums.length to the current index to remove extra elems that aren't unique;
        return nums.length
*/

var removeDuplicates = function (nums) {
  let currentIndex = 0; // Initialize the current index for storing unique elements

  // Iterate over the array from -1 to nums.length - 1
  for (let i = -1; i < nums.length - 1; i++) {
    if (nums[i + 1] !== nums[i]) {
      // Check if the next element is different from the current element
      nums[currentIndex] = nums[i + 1]; // Store the unique element at the current index position
      currentIndex++; // Increment the current index to prepare for the next unique element
    }
  }

  nums.length = currentIndex; // Set the length of nums to remove any extra elements beyond the unique elements
  return nums.length; // Return the count of unique elements
};
