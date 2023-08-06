/*
p: arr, and size of chunk
r: return array with chunk arrays of specified size length
ep:
    create output var []
    create chunk []
    for loop iterate
    push i to chunk
    if chunk.length === 3;
    outputvar.push[chunk], chunk = []
    continue iterating through again

    if chunk.length > 0 output.push chunk
*/

// 64ms beats 51.27%, mem 45.01mb beats 16.02%
var chunk = function (arr, size) {
    let output = [];
    let chunk = [];
    for(let i = 0;i<arr.length;i++){
        if(chunk.length === size){
            output.push(chunk);
            chunk = []
        }
        chunk.push(arr[i])
    }
    if(chunk.length > 0){
        output.push(chunk)
    }
    return output;
}

// faster: runtime 56ms beats 83.63%, mem 44.26mb beats 75.34%
function chunk(arr, size) {
    const output = []; // Initialize an empty array to store the chunks.
    
    // Loop through the input array in steps of 'size'.
    for (let i = 0; i < arr.length; i += size) {
        // Use the slice method to extract a chunk of the array.
        // The starting index is 'i', and the ending index is 'i + size'.
        // If the ending index exceeds the array length, slice will automatically stop at the end.
        const chunk = arr.slice(i, i + size);

        // Push the extracted chunk into the output array.
        output.push(chunk);
    }

    // Return the array of chunks.
    return output;
}