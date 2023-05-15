var isPalindrome = function (int) {
  // int must be converted to string to be able to chekc indices.
  let number = int.toString();
  // unnecessary because it would reach false anyways by not meeting conditionals below
  /* if (number.length === 0) {
    return false;
  } */
  if (number.length === 1) {
    return true;
  }
  if (number.length === 2 && number[0] === number[1]) {
    return true;
  }
  // check if first index and last equal. slice only returns the last and does not modify it.
  // we rerun it recursively by then calling slice(1, -1 ) which removes the first and last index.
  // is palindrome is ran again through prior checks.
  if (number[0] === number.slice(-1)) {
    return isPalindrome(number.slice(1, -1));
  }
  // if length is zero, it will return false as well
  return false;
};

console.log(isPalindrome(11));
