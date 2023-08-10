function rotate(nums, k) {
  k = k % nums.length; // Ensure k is within array bounds
  // Reverse the entire array
  nums.reverse();
  // Reverse the first part up to index k - 1
  reverse(nums, 0, k - 1);
  // Reverse the second part from index k to the end
  reverse(nums, k, nums.length - 1);
}

// Function to reverse a portion of the array
function reverse(nums, start, end) {
  while (start < end) {
    // Swap elements at start and end indices
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    // Move the start index forward and the end index backward
    start++;
    end--;
  }
}

/*
p: nums array, steps to rotate in k
r: return rotated array
ep: 
    first ensure not rotated excessively by finding module of k and nums.length
    reverse original nums arr

    then use helper function that a hard coded reverse to reverse nums up to k - 1 of reversed array (first part)
    then use helper funciton to reverse k to reverse arr.length.

    /// reverse function helper
    3 params, nums start end
    use while loop as start < end
    create temp var that starts at nums[start]
    redefine nums[start] with nums[end];
    redefine nums end with temp
    incremenet start 
    decrement end
*/
