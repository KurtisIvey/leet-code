var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }
  return result;
};

var productExceptSelf = function (nums) {
  const length = nums.length;
  // create array of same length with placeholders of integer 1
  const result = new Array(length).fill(1); // Create an array to store the result, initially filled with 1s.

  // Calculate the product of elements before the current index
  let productBefore = 1; // Initialize a variable to keep track of the product before the current index.
  for (let i = 0; i < length; i++) {
    // multiple by product before first so it doesn't include the index i of nums in multiplication
    result[i] *= productBefore; // Multiply the result at the current index by the product before.
    productBefore *= nums[i]; // Update the productBefore for the next iteration.
  }

  // Calculate the product of elements after the current index, iterating backwards
  let productAfter = 1; // Initialize a variable to keep track of the product after the current index.
  for (let i = length - 1; i >= 0; i--) {
    // multiply first so nums[i] isn't iterated over in that index
    result[i] *= productAfter; // Multiply the result at the current index by the product after.
    productAfter *= nums[i]; // Update the productAfter for the next iteration.
  }

  return result; // Return the final array containing the products of all elements except the one at the respective index.
};

// Initialize the input array: [1, 2, 3, 4]
// Initialize the result array with all 1s: [1, 1, 1, 1]
// First loop (Calculate product before current index):

// Index 0 (1):

// productBefore = 1
// result[0] *= 1 (result: [1, 1, 1, 1])
// productBefore *= 1 (productBefore: 1)
// Index 1 (2):

// productBefore = 1
// result[1] *= 1 (result: [1, 1, 1, 1])
// productBefore *= 2 (productBefore: 2)
// Index 2 (3):

// productBefore = 2
// result[2] *= 2 (result: [1, 1, 2, 1])
// productBefore *= 3 (productBefore: 6)
// Index 3 (4):

// productBefore = 6
// result[3] *= 6 (result: [1, 1, 2, 6])
// productBefore *= 4 (productBefore: 24)
// Second loop (Calculate product after current index):

// Index 3 (4):

// productAfter = 1
// result[3] *= 1 (result: [1, 1, 2, 6])
// productAfter *= 4 (productAfter: 4)
// Index 2 (3):

// productAfter = 4
// result[2] *= 4 (result: [1, 1, 8, 6])
// productAfter *= 3 (productAfter: 12)
// Index 1 (2):

// productAfter = 12
// result[1] *= 12 (result: [1, 12, 8, 6])
// productAfter *= 2 (productAfter: 24)
// Index 0 (1):

// productAfter = 24
// result[0] *= 24 (result: [24, 12, 8, 6])
// productAfter *= 1 (productAfter: 24)
// Final result array: [24, 12, 8, 6]

// So, for the input [1, 2, 3, 4], the output is [24, 12, 8, 6], which represents
//  the products of all elements except the one at each respective index.
