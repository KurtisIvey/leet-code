/*
p: string of words with spaces
r: return the length of the last word
ep:
    create var called words that is an array from s.split(' ');
    filter words to only have length > 0
    get last index and return its length

*/

// runtime 58ms beats 58.31%, memory 41.72mb beats 74.35%
function lengthOfLastWord(s) {
  let words = s.split(" ").filter((word) => word.length > 0);
  return words[words.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
