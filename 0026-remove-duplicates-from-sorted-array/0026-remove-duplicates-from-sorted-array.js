/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0 // tracks the position where the next unique elem should be placed in array

    // Iterate Through the array of nums - k(slow runner), x(fast runner)
    for(const x of nums){
        // Identify Unique Elements
        // Check if at the start of the array (k === 0) or the current elem is not the same as the last unique elem(then unique)
        if (k === 0 || x !== nums[k - 1]){
            // If found, store the current elem(x) at the next unique elem position
            nums[k] = x
            k++; // increment the index for the next unique element
        }
        // If the current element is the same as the last unique element,
        // the loop continues without doing anything, effectively skipping duplicates.
    }
    // Return the new length of the array after all duplicates have been removed.
    // This length is equivalent to the next unique element's index.
    return k;
};