/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/

/*
pesudocode
    - create obj that has vals of of dif numeral keys and vals converted
    - create empty var for converted num
    - use for loop only for iterating through
        - keep track of both current i and i+1 due to edge cases
        - if (i & i+ 1 = item in obj){
            we add to num var and add 1 to i so it's double incremented on loop flow
            }
        - else {
            find i in the obj and add that value, i will naturally increment from for loop
        }
    return empty var for num

*/

function romanToInt(s) {
  const numerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    // keep track of symbol vars during for loop to match with numerals
    const currentSymbol = s[i];
    const nextSymbol = s[i + 1];
    // keep track of combined because we want to check first
    const combinedSymbol = currentSymbol + nextSymbol;

    // some method to find the numeral within the array of objects.
    // check combined first
    if (numerals.some((numeral) => numeral.symbol === combinedSymbol)) {
      const matchingNumeral = numerals.find(
        (numeral) => numeral.symbol === combinedSymbol
      );
      output += matchingNumeral.value;
      i++; // skip the next symbol since it was already processed
    } else {
      const matchingNumeral = numerals.find(
        (numeral) => numeral.symbol === currentSymbol
      );
      // add to output
      output += matchingNumeral.value;
    }
  }
  return output;
}
