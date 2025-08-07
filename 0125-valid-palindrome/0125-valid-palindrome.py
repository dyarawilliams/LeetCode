class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # set up start(left) and end(right) pointers
        left, right = 0, len(s) - 1

        # Loop, while 2 pointer haven't crossed each other
        while left < right:
            # Skip over non-alphanumeric character, 
            # move left pointer forward until pointing at a valid character
            while left < right and not s[left].isalnum():
                left += 1
            # move right pointer backwards until pointing at a valid character
            while left < right and not s[right].isalnum():
                right -= 1

            # Once both pointers are on valid characters, Compare them (don't compare them directly)
            if s[left].lower() != s[right].lower():
                return False
            # If they are equal move both pointers inward
            left += 1
            right -= 1
        # If never hit a mismatch
        return True