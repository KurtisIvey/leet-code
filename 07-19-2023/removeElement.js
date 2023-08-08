/*
p: array of integers, and integer target
r: return number of elements that aren't target val(integer)
    must use approach that restablish arr with _
ep:
    use single pointer approach
    have var starting at 0;
    for loop to iterate over nums
        if num !== val
        nums[currentIndex] = nums[i] 
        currentIndex++
        
    array.length = current index
    return array
*/

var removeElement = function (nums, val) {
  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== val) {
      nums[currentIndex] = num;
      currentIndex++;
    }
  }
  nums.length = currentIndex;
  // returns length of curr index amount 
  // when one found, it increments
  // tracking down via curr index
  return nums.length;
};
