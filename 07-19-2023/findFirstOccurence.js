/*
p: string, and certain string of chars
r: return index of first occurence, else return -1 if none
ep:
    for loop approach
    iterate over each haystack char
        define empty str
        for loop within for loop starting index = 0; j < i + needle.length; j++
        loop through and add to str with each char of j
        if str === needle, we retunr i
    else return -1

*/
var strStr = function (haystack, needle) {
  // Loop through each character in the haystack using pointer 'i'
  for (let i = 0; i < haystack.length; i++) {
    // Create an empty string 'str' to store a substring from haystack
    let str = "";

    // Loop through characters in haystack starting from 'i'
    // up to 'i + needle.length - 1', using pointer 'j'
    for (let j = i; j < i + needle.length; j++) {
      // Append characters to 'str' to form a substring of the same length as needle
      str += haystack[j];
    }

    // Check if the formed substring 'str' is equal to the needle
    if (str === needle) {
      // If they match, return the starting index 'i' of the first occurrence
      return i;
    }
  }

  // If the loop completes without finding a match, return -1 to indicate no occurrence of the needle
  return -1;
};
