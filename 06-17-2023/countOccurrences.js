/*

Write a function that takes
 an array of strings and a target word, and returns the number of occurrences of the target word in the array.

*/

function countOccurrences(words, target) {
  // The `filter()` method is used to create a new array that only contains words matching the target word.
  // The callback function `word => word === target` checks if each word in the array is equal to the target word.
  // If a word matches the target, it is included in the filtered array.
  const filteredWords = words.filter((word) => word === target);

  // The `length` property is then accessed on the filtered array to get the count of occurrences.
  return filteredWords.length;
}

/*

In this code, the filter() method is used to create a new array (filteredWords) that contains only the words matching the target word. Here's how it works:

The filter() method is called on the words array, which is the array of words being searched.

The callback function (word => word === target) is executed for each element (word) in the array.

The callback function checks if each word (word) is equal to the target word.

If a word matches the target, it is included in the filtered array (filteredWords).

After filtering, the length property is accessed on the filteredWords array to get the count of occurrences.

The count of occurrences is returned as the result of the countOccurrences function.

In the example usage, the countOccurrences function is called with the words array ['apple', 'banana', 'cherry', 'apple', 'date', 'apple'] and the target word 'apple'. The function filters the array to include 
only the occurrences of 'apple' and returns the count, which is 3. The count is then printed to the console.

*/
