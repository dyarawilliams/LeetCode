# Sliding Window - Fixed window

class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        ans = 0
        current_sum = 0
        left, right = 0, 0 # Initialize pointers
        num_to_index = {} # create a hash map that will store the index of the last occurrence of nums

        while right < len(nums):
            curr_num = nums[right]
            last_occurrence = num_to_index.get(curr_num, -1)
            # if current window already has number or if window is too big, adjust window
            while left <= last_occurrence or right - left + 1 > k:
                current_sum -= nums[left] # update current sum
                left += 1 # shrink window by 1
            num_to_index[curr_num] = right
            current_sum += nums[right]
            if right - left + 1 == k:
                ans = max(ans, current_sum)
            right += 1
        return ans