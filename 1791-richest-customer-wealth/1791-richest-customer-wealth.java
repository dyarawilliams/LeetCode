class Solution {
    public int maximumWealth(int[][] accounts) {
        int maxWealthSoFar = 0;

        for (int [] customer : accounts){
            int currentCustomerWealth = 0;

            for (int bank : customer){
                currentCustomerWealth += bank;
            }
            maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth);
        }
        return maxWealthSoFar;
    }
    // Time Complexity: O(n x m)
    // Space Complexity: O(1)
}