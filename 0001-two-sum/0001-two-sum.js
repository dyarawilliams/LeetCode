/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {}; // Initialize a Hash Map - object in JavaScript
    // Iterate Through the Array
    for(let i = 0; i < nums.length; i++){
        const currentNum = nums[i];
        // Calculate the complement
        const complement = target - currentNum;
        
        // Check if the complement exists in map
        if(numMap.hasOwnProperty(complement)){
            // If found, return the indices
            return [numMap[complement], i];
        }

        // If the complement is not found, add the currentNum and its index to the numMap
        numMap[currentNum] = i;
    }
    return [];
};