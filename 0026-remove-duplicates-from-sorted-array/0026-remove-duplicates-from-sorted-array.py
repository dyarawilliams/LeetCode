class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        k = 0 # array position marker (slow runner - where next unique elem placed)
        for x in nums:
            # Check if k is 0 --> we're at the start of the array
            # or if the current number is not equal to the last unique number we've seen.
            # The condition k == 0 is true for the first element, so we store it as the first unique element.
            if k == 0 or x != nums[k - 1]:
                nums[k] = x # current unique elem at the k-th position in array
                k += 1 # increment to indicate next unique elem placed in next position
        # Return the length of the array containing all unique elements (new length of the array without duplicates)
        return k