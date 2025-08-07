class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        boundary_index = -1

        # Find mid point and ask condition
        while left <= right:
            mid = (left + right) // 2
            # if <= last element, then belongs to lower half
            if nums[mid] <= nums[-1]:
                boundary_index = mid
                right = mid - 1 # search left
            else:
                left = mid + 1 # shift right
        return nums[boundary_index]

