/*
p: array of strings in varied chars and lengths
r: return array of arrays that are anagrams
ep:
    create hashmap to store sorted string with array as value that takes anagrams
    use helper function to create sorted version to detect if anagram
        str.split('').sort().join('')
    iterate using for loop, no index necessary so use of
        create const sortedStr from helperFunc(str)
        create foundKey var via map.get(sortedStr)

        if(foundKey) is present, foundkey.push(str)
        update the map via set method
        continue with for loop
        
        if not in there, map.set with new sortedStr, [str]

        return Array via the map vals
*/

function sortString(str) {
  return str.split("").sort().join("");
}

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const sortedStr = sortString(str);

    const foundKey = map.get(sortedStr);

    if (foundKey) {
      foundKey.push(str);
      map.set(sortedStr, foundKey);
      continue;
    }
    // if not in map
    map.set(sortedStr, [str]);
  }
  return Array.from(map.values());
}

// func with comments
// Define a function called sortString which takes a string (str) and returns the string with its characters sorted.
function sortString(str) {
  // Split the input string into an array of characters, sort the array, and then join it back into a string.
  return str.split("").sort().join("");
}

// Define a function called groupAnagrams which takes an array of strings (strs) and groups anagrams together.
function groupAnagrams(strs) {
  // Create a new Map where the keys are sorted strings and the values are arrays of anagrams.
  const map = new Map();

  // Iterate through each string in the input array.
  for (let str of strs) {
    // Sort the current string to get a consistent representation for anagrams.
    const sortedStr = sortString(str);

    // Attempt to retrieve an existing array of anagrams from the map using the sorted string as the key.
    const foundKey = map.get(sortedStr);

    // If an array of anagrams is found for the current sorted string.
    if (foundKey) {
      // Add the current string to the array of anagrams.
      foundKey.push(str);
      // Update the map with the modified array of anagrams.
      map.set(sortedStr, foundKey);
      // Skip to the next iteration of the loop.
      continue;
    }

    // If no array of anagrams is found for the current sorted string, create a new array with the current string as its only element.
    map.set(sortedStr, [str]);
  }

  // Convert the values of the map (arrays of anagrams) into an array and return it.
  return Array.from(map.values());
}
