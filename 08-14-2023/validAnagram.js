/*
p: two strings
r: return true or false
ep: 
    split strings, sort them, and then rejoin into string to compare
    should have exact same makeup to be anagram
*/

var isAnagram = function (s, t) {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};
