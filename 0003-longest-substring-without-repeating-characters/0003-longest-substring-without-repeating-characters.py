from collections import defaultdict

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest = 0 # track the maximum substring seen so far
        left = 0 # window start
        counter: dict[str, int] = defaultdict(int) # every character automatically starts with a count of zero

        # Loop through the string using a right pointer - expanding from the right
        for right in range(len(s)):
            counter[s[right]] += 1

            # If the character added appears more than once that means we have a duplicate - fix the window
            while counter[s[right]] > 1:
                # Shrink the window from the left - remove input[left] from window
                counter[s[left]] -= 1
                # Move left forward by 1
                left += 1
            longest = max(longest, right - left + 1)
        return longest