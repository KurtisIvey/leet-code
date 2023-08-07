/*
p: num array of int
r: return majority element integer
ep:
    create object to count
    for loop iterate through
    when not in array set key to item and value to 1
    if present increment by 1

    at the end, check for if any values of key are > nums.length/2
*/

function majorityElement(nums){
    const obj = {};
    for(let i = 0; i< nums.length; i++){
        const num = nums[i]
        if(num in obj){
            obj[num]++;
        }else{
            obj[num] = 1
        }
        
    }    
    const n = nums.length;
    for (const num in obj) {
        // determine if value from key greater than n/2
        if (obj[num] > n / 2) {
            return parseInt(num);
    }}
}