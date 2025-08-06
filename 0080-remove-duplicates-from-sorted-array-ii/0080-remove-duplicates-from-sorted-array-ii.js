/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for(let x of nums){
        if (k < 2 || x > nums[k-2]){
            nums[k] = x;
            k++;
        }
    }
    return k;
};