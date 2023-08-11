/*
p: array of num integers
r: return boolean if able to reach last index
ep: create goal var set at last index
    use for loop to iterate through starting backwards at 2nd to last index, and decremented
    check if nums[i] + i >= goal, if it is redefine goal as i

    if goal == 0 return true
*/

var canJump = function (nums) {
  // Initialize the goal as the last index of the array
  var goal = nums.length - 1;

  // Iterate from the second-to-last index backwards to the first index
  for (var i = nums.length - 1; i >= 0; i--) {
    // Check if the sum of the jump length (nums[i]) and current index (i)
    // can reach or go beyond the current goal index
    if (nums[i] + i >= goal) {
      // If yes, update the goal to the current index 'i'
      goal = i;
    }
  }
  // After iterating through the array, if the goal is at index 0,
  // it means you can reach the start from the end
  if (goal == 0) {
    return true; // You can jump to the end
  }
  return false; // You can't jump to the end
};

// fail example:
// Example input: nums = [3, 2, 1, 0, 4]
// Initialize goal as the last index: goal = 4.
// Start looping from the second-to-last index (i = 3), which corresponds to the value 0 in the array.
// At i = 3 (value 0), calculate nums[i] + i which is 0 + 3 = 3. Since 3 is not greater than or equal to goal, no change is made to goal.
// Move to the next index, i = 2, which corresponds to the value 1 in the array.
// At i = 2 (value 1), calculate nums[i] + i which is 1 + 2 = 3. Since 3 is not greater than or equal to goal, no change is made to goal.
// Move to the next index, i = 1, which corresponds to the value 2 in the array.
// At i = 1 (value 2), calculate nums[i] + i which is 2 + 1 = 3. Since 3 is not greater than or equal to goal, no change is made to goal.
// Move to the next index, i = 0, which corresponds to the value 3 in the array.
// At i = 0 (value 3), calculate nums[i] + i which is 3 + 0 = 3. Since 3 is not greater than or equal to goal, no change is made to goal.
// Loop completes, and the final value of goal is still 4.
// Since the final value of goal is not 0, the function returns false because you couldn't jump all the way to the start from the end.

// success
// Example input: nums = [2, 3, 1, 1, 4]
// Initialize goal as the last index: goal = 4.
// Start looping from the second-to-last index (i = 3), which corresponds to the value 1 in the array.
// At i = 3 (value 1), calculate nums[i] + i which is 1 + 3 = 4. Since 4 >= goal, update goal to i which is now 3.
// Move to the next index, i = 2, which corresponds to the value 1 in the array.
// At i = 2 (value 1), calculate nums[i] + i which is 1 + 2 = 3. Since 3 >= goal, update goal to i which is now 2.
// Move to the next index, i = 1, which corresponds to the value 3 in the array.
// At i = 1 (value 3), calculate nums[i] + i which is 3 + 1 = 4. Since 4 >= goal, update goal to i which is now 1.
// Move to the next index, i = 0, which corresponds to the value 2 in the array.
// At i = 0 (value 2), calculate nums[i] + i which is 2 + 0 = 2. Since 2 is not greater than or equal to goal, no change is made to goal.
// Loop completes, and the final value of goal is still 1.
// Since the final value of goal is not 0, the function returns false because you couldn't jump all the way to the start from the end.
