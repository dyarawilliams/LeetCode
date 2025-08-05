/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // num of elements keeping
    for (let i = 0; i <= nums.length; i++){
        const num = nums[i]
        if (val !== num){
            k++;
            continue;
        }
        nums.splice(i, 1);
        i--;
    }
    return k;
};