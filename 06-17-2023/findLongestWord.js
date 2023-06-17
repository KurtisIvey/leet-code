/*

Write a function that takes an array of strings and returns the longest word.

*/

function findLongestWord(wordArr) {
  // The `reduce()` method is used to iterate over the wordArr array.
  // It takes a callback function as the first argument and an initial value (here, an empty string "") as the second argument.
  // The callback function compares the length of the current word (curr) with the length of the longest word (longest) obtained so far.
  // It returns the word with the greater length, becoming the new longest word for the next iteration.
  return wordArr.reduce(
    (longest, curr) => (curr.length > longest.length ? curr : longest),
    ""
  );
}

/*

In this code, the reduce() method is used to find the longest word in the wordArr array. Here's how it works:

The initial value for longest is set to an empty string "". This ensures that any word in the array will be considered longer than an empty string during the first iteration.

The reduce() method iterates over each word (curr) in the wordArr array.

For each iteration, the callback function (longest, curr) => (curr.length > longest.length ? curr : longest) is executed. It compares the length of the current word (curr) with the length of the longest word (longest) obtained so far.

If the length of the current word (curr) is greater than the length of the longest word (longest), the ternary operator (curr.length > longest.length ? curr : longest) returns curr as the new longest word. Otherwise, it returns longest as is.

The returned value from the callback function becomes the new longest value for the next iteration.

After all iterations, the final longest word is returned by the reduce() method.

In the example usage, the findLongestWord function is called with the words array ["apple", "banana", "cherry", "dragonfruit"]. The function finds the longest word, which is "dragonfruit", and it is then printed to the console.

*/
