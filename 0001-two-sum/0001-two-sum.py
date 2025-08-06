class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        num_to_index = {} # create a empty hash map to store
        
        # Loop through the array - gives indices and current number(num)
        for i, num in enumerate(nums):
            # calculate the complement(number we need to pair with the num to hit target)
            complement = target - num

            # Check hash map -> have we already seen this complement
            if complement in num_to_index:
                # if yes then the current number and earlier complement add up to the target 
                # return indicies
                return [num_to_index[complement], i]
            # if not seen yet, store the current number in the map with its index
            num_to_index[num] = i
        return []