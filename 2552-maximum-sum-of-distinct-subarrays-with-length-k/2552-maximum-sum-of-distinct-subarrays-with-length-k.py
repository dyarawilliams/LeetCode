class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        max_sum = 0
        current_sum = 0
        left = 0
        freq_map = {} # stores frequency of elements in the current window
        
        # Slide the window forward through the rest of the array by looping
        for right in range(len(nums)):
            # Expand the window
            elem = nums[right]
            current_sum += elem
            freq_map[elem] = freq_map.get(elem, 0) + 1 # update element count

            # Shrink the window if conditons are not met or window size exceeds k
            while len(freq_map) < (right - left + 1) or (right - left + 1) > k:
                # Remove input[left] from window
                left_elem = nums[left]
                current_sum -= left_elem # Removes leftmost element from sum
                freq_map[left_elem] -= 1 # Decrease count in frequency map

                if freq_map[left_elem] == 0:
                    del freq_map[left_elem] # Remove if count becomes 0
                
                left += 1 # Slide the window forward
            
            # Check if the current window is a valid distinct subarray of length k
            if (right - left + 1) == k and len(freq_map) == k:
                max_sum = max(max_sum, current_sum) # Update max_sum
            
        return max_sum
            

