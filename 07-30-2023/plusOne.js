/*
p: array of integers
r: return array of integers with +1
ep:
    check last array item
    add +1 to the value
    if last item == 10
    last item === 0
    2nd to last + 1


    reverse for loop would help

*/

// beats 96.81% runtime, beats 50.92% memory
function digits(digits) {
  const result = [...digits]; // Create a copy of the input array
  let carry = 1; // Initialize the carry to 1 (to increment by one)

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry === 0) break; // prevent unnecessary iteration
    const sum = result[i] + carry;
    result[i] = sum % 10; // Get the new digit, will be b/w 0-9. provides last digit
    carry = Math.floor(sum / 10); // Update the carry, will be 0 or 1, providers first digit if its two digit
  }

  // If there is still a carry after the loop ends, prepend it to the result
  if (carry > 0) {
    result.unshift(carry);
  }

  return result;
}
