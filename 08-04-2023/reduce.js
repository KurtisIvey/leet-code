/*
p: nums array of int, callback function, initializing value : init
r: return the value modified through arr. if length of arr is zero return init val
ep:
    create if function if length 0

*/

// runtime 53ms beats 87.59%, memory 42.01mb beats 82.31%
var reduce = function(nums, fn, init){
    // length 0 so return initializer
    if(nums.length === 0) return init;
    let output = init;
    for(let i = 0;i<nums.length;i++){
        output = fn(output, nums[i])
    }
    /* dif way for readability
    for(const num of nums){
        output = fn(output, num)
    }
    */
    return output
}

