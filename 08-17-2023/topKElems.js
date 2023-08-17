/*
p: nums array of integers, k target that's an integer
r: return the k nums
ep:
    create map to store frequency of each number
    use for loop to iterate through nums and add to map
        if in map, increment value by 1
        else set in map val to 1
    then get keys from the map in array format
    proceed to sort the keys in array in descending order greatest to least
    then we return the number of keys from the start of the array to k
*/

// runtime 60ms beats 93.56%, mem 42.79mb beats 99.75%

var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let keysArray = [...map.keys()];
  keysArray.sort((a, b) => map.get(b) - map.get(a));

  return keysArray.slice(0, k);
};

var topKFrequent = function (nums, k) {
  // create hashmap to store keys and values
  let map = new Map();
  // iterate through nums with for loop
  for (let i = 0; i < nums.length; i++) {
    // if value in hashmap
    if (map.has(nums[i])) {
      // we identify the key in the first map.set arg, and pass in the value to change in second
      // second arg: retrieve current val and increment by 1
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      // if not present, we set the key inside the hashmap with initial val of 1
      // as its the first occurence
      map.set(nums[i], 1);
    }
  }
  // create array of the keys in map
  let keysArray = [...map.keys()];
  // we then sort it in descending order by identifying the value amount in the hashmap as we pass in the integer from the keys array
  // num in keys array > uses map.get(num) to compare
  // must have "map" var completed to compare
  keysArray.sort((a, b) => map.get(b) - map.get(a));
  // we then return the up to k elements as specified
  return keysArray.slice(0, k);
};
