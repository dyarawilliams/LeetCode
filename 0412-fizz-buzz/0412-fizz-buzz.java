class Solution {
    public List<String> fizzBuzz(int n) {
        // Create a return list, initialize to number of items
        List<String> answer = new ArrayList<>(n);

        for (int i = 1; i <= n; i++){
            // Check if divisible by 3 or 5
            boolean divisibleBy3 = i % 3 == 0;
            boolean divisibleBy5 = i % 5 == 0;

            if (divisibleBy3 && divisibleBy5) {
                answer.add("FizzBuzz");
            } else if (divisibleBy3) {
                answer.add("Fizz");
            } else if (divisibleBy5) {
                answer.add("Buzz");
            } else {
                answer.add(String.valueOf(i));
            }
        }
        return answer;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(1)
}