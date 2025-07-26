/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    // Initialize a variable for largest wealth
    let maxWealthSoFar = 0;

    // Iterate through each customer account
    for(let customer of accounts){ // rows in accounts table
        let currentCustomerWealth = 0; 

        // For each customer iterate through their bank
        for(let bank of customer){
            currentCustomerWealth += bank;
        }

        // Check if customer wealth is greater than the largest wealth thus far
        maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth);
    }
    return maxWealthSoFar;

    // Time Complexity: O(n x m)
    // Space Complexity: O(1)
};