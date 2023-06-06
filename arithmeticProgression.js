/*
    take an array and sort it.
    verify using sliding window to see if the 
    differences between left and right pointer are same as first dif

    if right pointer reaches end and difs return same as first dif, return true
*/

function canMakeArithmeticProgression(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let dif = sortedArr[1] - sortedArr[0];
  for (let i = 2; i < arr.length; i++) {
    if (sortedArr[i] - sortedArr[i - 1] !== dif) return false;
  }
  return true;
}

/*
chat gpt explanation of my solution

    space complexity O(1)
    time complexity O(n log n)

    - The input array arr is passed to the function.
    - The arr.sort((a, b) => a - b) line sorts the array arr in ascending order and 
        assigns the sorted array to the variable sortedArr. This step ensures that the 
        elements are in sequential order for further processing.
    - The variable dif is assigned the difference between the second element (sortedArr[1]) 
        and the first element (sortedArr[0]) of the sorted array. This represents the
        initial difference between consecutive elements.
    - The for loop starts iterating from the third element (i = 2) of the input array arr.
    - Inside the loop, it checks if the difference between the current element (sortedArr[i]) and the previous element (sortedArr[i - 1]) is not equal to the initial difference (dif).
    - If the difference is not equal to dif, it means the elements are not forming
        an arithmetic progression. In this case, the function returns false to 
        indicate that it is not possible to rearrange the array into an arithmetic progression.
    - If the loop completes without finding any differences that don't 
        match the initial difference, it means that all consecutive elements have the
        same difference. Therefore, the function returns true to indicate that the array 
        can be rearranged to form an arithmetic progression.

*/
