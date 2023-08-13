/*
p: array of integers
r: return integer amount of min jumps
ep:
    set jumps, current, and farthest vars to 0;
    use for loop to iterate through
        within loop calculate the farthest it can go via redefining with Math.max(farthest, to nums[i]+i)
        if i === current we redefine current with farthest and increment jump since it has to make a jump
    return total jumps

*/

var jump = function (nums) {
  let jumps = 0;
  let current = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (i === current) {
      current = farthest;
      jumps++;
    }
  }
  return jumps;
};

// This function calculates the minimum number of jumps required to reach the end of an array
var jump = function (nums) {
  let jumps = 0; // Initialize the number of jumps taken
  let current = 0; // Initialize the index of the current position
  let farthest = 0; // Initialize the index of the farthest reachable position

  // Iterate through the array elements (excluding the last element)
  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest reachable position using the maximum of the current farthest and the current element's value + its index
    farthest = Math.max(farthest, nums[i] + i);

    // If the loop index reaches the current position index, it means we have explored all reachable positions from the current position
    if (i === current) {
      current = farthest; // Update the current position index to the farthest reachable position
      jumps++; // Increment the jump count
    }
  }
  return jumps; // Return the minimum number of jumps required
};

// example:
// Consider the input array: [2, 3, 1, 1, 4]

// Step 1: Initialize variables
// jumps = 0
// current = 0
// farthest = 0
// Step 2: Loop through the array
// i = 0
// farthest = max(0, 2 + 0) = 2
// Since i is equal to current (0), update current = 2 and increment jumps to 1.
// i = 1
// farthest = max(2, 3 + 1) = 4
// Since i is not equal to current (2), continue the loop.
// i = 2
// farthest = max(4, 1 + 2) = 4
// Since i is equal to current (2), update current = 4 and increment jumps to 2.
// i = 3
// farthest = max(4, 1 + 3) = 4
// Since i is not equal to current (4), continue the loop.
// Step 3: The loop ends
// The loop has finished iterating through the array elements.
// Step 4: Return the result
// The value of jumps is 2, which is the correct minimum number of jumps required to reach the end of the array [2, 3, 1, 1, 4].
