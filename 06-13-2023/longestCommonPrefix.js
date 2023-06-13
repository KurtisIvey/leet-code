/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

pseudocode:
    have multiple strings of an array with unspecified length
    create for loop that checks first 
    
    we need to keep track of the characters in the first string because the rest must match as they're dependent to be a prefix
    use first index as tracker
    for loop to determine rest as all must be in compliance
*/

function longestCommonPrefix(arr) {
  if (arr.length === 0) {
    return ""; // empty arr, so no prefix
  }

  let prefix = arr[0]; // use first string as prefix
  // use two for loops to check, start at 1 because 0 is the prefix
  for (let i = 1; i < arr.length; i++) {
    // loop over each char, if it matches, it breaks
    for (let j = 0; j < prefix.length; j++) {
      if (arr[i][j] !== prefix[j]) {
        prefix = prefix.slice(0, j); // Reduce the prefix to the common characters up to j
        break;
      }
    }
  }

  return prefix;
}
