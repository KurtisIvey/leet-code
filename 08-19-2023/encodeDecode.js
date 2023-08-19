// create custom marker that inputs the number thats the length of the str followed by a hash symbol
function encode(strArr) {
  let output = "";
  for (let str of strArr) {
    output += `${str.length}#${str}`;
  }
  return output;
}

function decode(strEncoded) {
  let output = [];
  let i = 0;

  while (i < strEncoded.length) {
    let j = i;
    while (strEncoded[j] !== "#") {
      j += 1;
    }
    let length = strEncoded.substring(i, j).length; // Using .length directly
    output.push(strEncoded.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return output;
}

///////////////////////////////
///////////////////////////////
// Encoding function: Takes an array of strings and returns an encoded string
function encode(strArr) {
  let output = "";

  // Loop through each string in the array
  for (let str of strArr) {
    // Append the length of the current string, followed by '#' and the string itself
    output += `${str.length}#${str}`;
  }

  return output; // Return the encoded string
}

// Decoding function: Takes an encoded string and returns an array of decoded strings
function decode(strEncoded) {
  let output = []; // An array to store decoded strings
  let i = 0; // Starting index for processing

  // Iterate while there are characters left to process in the encoded string
  while (i < strEncoded.length) {
    let j = i;

    // Find the '#' character, which separates the length from the encoded string
    while (strEncoded[j] !== "#") {
      j += 1;
    }

    // Extract the length of the encoded string using the length of the substring
    let length = strEncoded.substring(i, j).length;

    // Extract the encoded substring itself using the calculated length
    output.push(strEncoded.substring(j + 1, j + 1 + length));

    // Move the index 'i' to the next position after the extracted substring
    i = j + 1 + length;
  }

  return output; // Return the array of decoded strings
}
