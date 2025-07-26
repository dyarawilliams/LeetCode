/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums){
    let results = []; // initialize array
    results[0] = nums[0] // running sum
    
    // Iterate through input list starting at second element
    for(let i = 1; i < nums.length; i++) {
        // Calculate corresponding running sums and save them to results array
        results[i] = nums[i] + results[i - 1];
    }
    return results;

    // Time complexity = O(n)
    // Space Complexity = O(1)
};