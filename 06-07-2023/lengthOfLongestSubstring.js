// sliding window solution similar to colt steel data structure and alg vid

/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces. 


*/

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  // the for loop i count is the end of the window
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // this is how we increment the start of the window.
      // if the seen char in the object is incremented more than the current start, that indicates that is has been seen again
      // the seen char is set to a value automatically by the i count of the for loop + 1 at the end of the for loop
      // therefore, when compared via math.max, it will then increment start automatically because seen char will always be higher
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    // this is how we calculate the longest count of not seeing a repeated char. add 1 because of zero start index
    // longest is recalculated on every for loop pass
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    // seen char is incremented in the object
    seen[char] = i + 1;
  }
  return longest;
}

/*
    example- 
    str = pluslonger

    loop number,
        1. seen{p:1} , longest = 1 because i=0 + 1 therefore longest is 1
        2. seen{p:1, l:2}, longest = 2 because char is not in seen, longest is incremented to i+1
        3. seen{p:1,l:2,u:3}, longest = 3
        4: seen{p:1,l:1,u:1,s:4}, longest = 4
        5: seen{p:1,l:5,u:1,s:1}, longest is 4 , but start is now at index 5 due to char being in seen{}
        6: seen{p:1,l:2,u:1,s:1, o:6}, longest is still 4, start is 4
        7: seen{p:1,l:2,u:1,s:1, o:1,n:7}, longest is still 4, start is 4
        8: seen{p:1,l:2,u:1,s:1, o:1,n:1,g:8}, longest is still 4, start is 4
        9: seen{p:1,l:2,u:1,s:1, o:1,n:1,g:1,e:9}, longest is now 5 because it's been recalculated via math.max which runs everytime, start is still 4
        10: seen{p:1,l:2,u:1,s:1, o:1,n:1,g:1,e:1,r:10}, longest is now 6 because it's been recalculated via math.max which runs everytime, start is still 4

  */
