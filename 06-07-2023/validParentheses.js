/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
Input: s = "[(])"
Output: false

proper closing bracket must come immediately after


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'. 


*/

/*
    create an empty array called stack
    create an object that will contain key value pairs of brackets and their corresponding closing brackets
    make for loop iterating through the length of bracket string
        -check if string[i] is in bracket object, 
            if it is, it's an opening bracket and we add it to the stack
            if its not, and the stack length is 0 return false
            if its not, and the string[i] is not the value of the previous key in the stack, return false
            if its not, but string[i] is the proper closing bracket key, we pop the first item off the stack.
        return the stack length once it's 0
*/

function validParentheses(string) {
  let stack = [];

  const bracketObj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // can't be string.length-1 because it will exclude last char
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (bracketObj[char]) {
      stack.push(char);
    } else {
      // bracketsObj[stack.pop()] returns the value for the key which should equal the current char
      if (stack.length === 0 || bracketObj[stack.pop()] !== char) {
        return false;
      }
    }
  }
  // will generate true if condition is met. Can't have any brackets left in stack.
  return stack.length === 0;
}
